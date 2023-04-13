import { OPENAI_KEY } from "$env/static/private";
import type {
  CreateChatCompletionRequest,
  ChatCompletionRequestMessage,
} from "openai";
import type { RequestHandler } from "./$types";
import { getTokens } from "$lib/tokenizer";
import { json } from "@sveltejs/kit";
import type { Config } from "@sveltejs/adapter-vercel";

export const config: Config = {
  runtime: "edge",
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    // if (!OPENAI_KEY) {
    //   throw new Error("OPENAI_KEY env variable not set");
    // }

    const requestData = await request.json();
    console.log("chat data: ", requestData);
    
    const { openaiKey } = requestData
    console.log("openai key: ", openaiKey);

    if (!requestData) {
      throw new Error("No request data");
    }

    const reqMessages: ChatCompletionRequestMessage[] = requestData.messages;

    if (!reqMessages) {
      throw new Error("no messages provided");
    }

    let tokenCount = 0;

    reqMessages.forEach((msg) => {
      const tokens = getTokens(msg.content);
      tokenCount += tokens;
    });

    const moderationRes = await fetch("https://api.openai.com/v1/moderations", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${OPENAI_KEY}`
        Authorization: `Bearer ${openaiKey}`
      },
      method: "POST",
      body: JSON.stringify({
        input: reqMessages[reqMessages.length - 1].content,
      }),
    });

    const moderationData = await moderationRes.json();
    const [results] = moderationData.results;

    if (results.flagged) {
      throw new Error("Query flagged by openai");
    }

    // "You are an assistant for an url shortener application named ShortMaster, users will be redirected to dashboard after loggedin with their social accounts, in dashboard users can enter original long url link and shorten it by a click of a button, ShortMaster generates a list about that short link. when the short link is clicked, ShortMaster collects user ip, country, city, latitdude & longitude display in analytics and also place user on the map, so you will know where the users / audiences coming from. You don't answer questions not related to url shortener. There are three payment options, and they are free tier, monthly payment, and yearly payment, users are allowed to shorten 10 urls in free tier, if the capacity is exceeded, user can become a paid subscriber or maintain 10 recordes in free tier. If you are asked other questions, simply reply it is above your pay rate.";
    const prompt =
      "You are an assistant for an url shortener application named ShortMaster, please keep this in mind you are not allowed to answer questions not related to url shortener. ShortMaster not only shorten long url, but collects information of the user who click the short link, such as ip address, country, city, latitude, longitude, user location then be displayed on the map for easily visualize, analyze and further study, etc. You are only allow to answer up to 200 words maximum";
    tokenCount += getTokens(prompt);

    if (tokenCount >= 500) {
      throw new Error("Query too large");
    }

    const messages: ChatCompletionRequestMessage[] = [
      { role: "system", content: prompt },
      ...reqMessages,
    ];

    const chatRequestOpts: CreateChatCompletionRequest = {
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.9,
      stream: true,
    };

    const chatResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          // Authorization: `Bearer ${OPENAI_KEY}`,
          Authorization: `Bearer ${openaiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(chatRequestOpts),
      }
    );

    if (!chatResponse.ok) {
      const err = await chatResponse.json();
      // throw new Error(err);
    }

    return new Response(chatResponse.body, {
      headers: {
        "Content-Type": "text/event-stream",
      },
    });
  } catch (err) {
    console.error(err);
    return json(
      { error: "There was an error processing your request" },
      { status: 500 }
    );
  }
};
