# <img height="40" align="left" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/public/shormaster_logo-removebg.png"  alt="Logo" /> ShortMaster - A Sveltekit application that not only shorten long url but analyze traffic from the clicks

<img src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/home-v2.png" />

**Before** the advent of `Svelte` and `Sveltekit`, most people built single page application with `Angular`, `React` and `Vue`, I was one of them, I used to build web apps with `Vue.js` most of the time, a little bit `React.js`, until I found out `Svelte`, I couldn't remember how I exactly discover Svelte, but I know I was totally amazed and fall in love with the magic it brings about, short, clean and easy to understand and read syntax / expresssion, built-in store management, well structured folder, the entire system is just terrific, I never thought developing web applications can be so pleasant and enjoyble, everything is so intuitive, and of course I switched to Svelte without any hesitation. I also dived in fullstack application with `Sapper`, a meta-framework built on top of Svelte and is as known one of the Big Three, the other two are `Next.js` and `Nuxt.js`, then we all know what happened, Rich Harris and Svelte team created the revoluntionary meta-framework~ `Sveltekit`, and it is so popular that it has become Developers's most loved and used framework. The reason `Sveltekit` is so cool and awesome is because its genius file naming strategy, for example, `+page.svelte` means it is a ui file, does thing on client side after dom is mounted; `+page.server.js` indicates it is a server file, we fetch external data in this file and inject to `+page.svelte`, the ui is fully rendered on server side and is displayed on page. `+server.js` is a standalone api file, it handles CRUD operations such as Create / Read / Update / Delete on api, etc. With Sveltekit building a fully functional web applications has become very easy, with the naming mechanism it makes coding intuitive, Sveltekit takes care of the heavy lifting job for us so we can focus on the creative parts. I used to build SSR web apps with Node/Express, and I fully switched to Sveltekit because of the above mentioned advantages.

**This** ShortMaster URL shortener applications functionalities and features are all handled on server side, so on client side we only read the data injected from server side and rendering. I personally love server side render because users / visitors always see the fully rendred page in no time, and avoid parts such as loading indicators / skeletons, etc. compared to client side rendering (Single Page Application)

**As** a big fan of Svelte / Sveltekit, I quite often browse `svelte.dev` to look for answers / solutions / inspirations, and I happed to find out SvelteHack competition, and feel very excited and eagerly to participate this awesome and meaningful event. Because time is not much so I was thinking what type of application is best demonstrating Sveltekit's advanced features. I want this app have features such as theme switcher, multiple languages support, authentication, route gurad, chatbot, and I think an URL shortener application is a good idea, not only short long url but track user info such as ip address, country, city, geolocation, etc. I have been learning Svele/Sveltekit for awhile from official website, articles and youtube, and I already have a blueprint on how to implement these features and functionalities. After one something month the app is accomplished and it is time to present the results that I am proud of and hopefully not only win the prizes but help contribute to Svelte society, I am pretty sure Sveltekit is the No.1 meta-framework, it is better than Next, Nuxt, Remix and many other frameworks based upon my personal experiences. I think people should be aware of the advantages, benefits and power that Svelte / Sveltekit brings about over other frameworks and knowing building powerful server side render application can be pretty easy and fun, and there is no need to learn and build backend MVC server with Node, ASP.Net, Python, Ruby, PHP, etc. Sveltekit takes care of it all 🤩😀🥰😉🤗😘😎👍

One thing to mention is that designing an appealing, good-looking user interface is always a challenge for me, and I think this applies to most of the developers / coders. It took me awhile to determined the layout of the pages, this involves color, title, subtitle, etc.

## How it works

1. User has to login with one of the social accouns.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/auth.png" />

2. User will be brought to dashboard page after login.

3. There is a form on top where user enter a long url, clicking the shorten button, the system then designates a randomly generated six figures (short key) automatically and update the info with a card

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/dashboard.png" />

4. Click the short link in the card section to enter detailed page.
5. You can see ShortMaster icon in the center of the map in the top.
   
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/detailed-v1.png" />

6. Copy the shortend url by clicking the copy icon, open a new tab and paste it on the address bar, you will be redirected to the original url, the total clicks will be automatically increased by one, and the ip address, country, city will be collected and user location (whoever clicks the link) will be displayed on the map.
   
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/detailed-v2.png" />

7. This is pretty much about the main features and functionalities of ShortMaster URL shortener.

### Live Demo

<!-- - [ShortMaster on Netlify](https://shortmaster.netlify.app) -->
- [ShortMaster on Vercel](https://shortmaster1.vercel.app)

<!-- The app is working perfectly on Vercel all the time at the beginning but somehow it is not working anymore due to "Serverless Function crash" and I cannot get it fixed therefore I take alternative approach that is to deploy the project on `Netlify` to make it work properly. -->

## Table of Contents

- [Features](#Features)
- [Tech Stack](#Tech_Stack)
- [Routes](#Routes)
- [Third Party APIs](#Third_Party_APIs)
- [Third Party Packages](#Third_Party_Packages)
- [Supabase as BAAS](#Supabase_BAAS)
- [Environment Variables](#Environment_Variables)
- [Get Project Up and Running](#Get_Project_Up_And_Running)

## Features

**Theme Switcher**

Users are able to select favorite theme, it applies to the entire application, the selected theme is remembered by the application and is stored in cookie, so when page is refreshed users won't see the flicker, it provies great user experiences thanks to `Sveltekit` powerful server side rendering mechanism. - [Huntabyte](https://www.youtube.com/watch?v=3GpZkVBjXfE)

<img height="400" src="https://shortmaster1.vercel.app/I5W0gv">

**Internationalization**

Multiple languages supports is essential for a successful web application, being able to serve people around the world is the key to success, therefore, adding `i18n` to the app is crucial. A `sveltekit-i18n` package is leveraged to make this feature come true. - [sveltekit-i18n](https://www.npmjs.com/package/sveltekit-i18n)


<img height="200" src="https://shortmaster1.vercel.app/cMRCJb">


**User account**

Loggedin user's avatar image will be apperaed on the top right corner, when mouse hovered the menu will be opened, submenu such as user name, dashboard, chatbot toggle, logout will be shown.

<img height="200" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/menu-user-v2.png">


**Chatbot**

The advent of `chatGPT` has becoming a phenomonal, it takes chabot to another level, it talks in human manner, understand what we ask, and answer questions beyond our expectations. Therefore an `OpenAI` powered chatbot has become a necessity for a successful app to draw visitors' attention and willing to stay longer on our page. _ShortMaster_ has `OpenAI` powered chatbot built-in, it not only answers questions related to URL shortening, but also other concerns if you would like to just chat with this super intelligent AI - [https://platform.openai.com/overview](https://platform.openai.com/overview)

<!-- , all the conversation is stored so that you don't need to restart the conversation all over again once the chat window is closed. -->

<img height="400" src="https://shortmaster1.vercel.app/xICP5o">

**Tracking Capability**

When a user click shortend url you pasted, _ShortMaster_ collects total clicks from that particular url, and that user's ip address, country, city, latitude, longitude, etc. User location is then displayed on the map in dashoard. This feature let you visualize where the traffic is from and that makes you easily target the audiences to deliver your services.

**Fully Responsive UI**

All the pages are fully responsive, no matter what size of the page, or what dimension of the device, _ShortMaster_ always presents the best and good looking user interface.

<p align="left">
  <img width="186" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-home.png">

  <img width="186" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-auth.png">

  <img width="186" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-dashboard.png">

  <img width="186" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-details.png">
</p>

## Tech_Stack

**Sveltekit**

`Sveltekit` is the No.1 meta-framework in Javascript world, it allows developers to work on both forntend and backend functionality to build powerful fullstack applications in an easy and pleasant manner. It has the best, clear, easy to understand folder structure that illustrates the route (client, server and api), it also has the simpliest, cleaniest, most intuitive, easiest to read and understand syntax, template engine, expressions to provide best developer experiences, it is a master piece from **Rich Harris** and **Svelte core team** - [Sveltekit Docs](https://kit.svelte.dev/) 


**Supabase**

`Supabase` is a backend as a service, it has database, authentication, storage, edge function, etc. It provides simple, clean, easy to read and understand functions / expressions / api to perform CRUD operation. We can go to API Docs page and copy the codes and paste into our project, modify table name and the column data to get job done like piece of cake. It makes developing backend functionality way so much easy, it is the alternative of the popular `firebase` but even better. - [Supabase Docs](https://supabase.com/)

**Tailwindcss / Daisyui**

`Tailwindcss` is a utility class library, it lets developers never leave html, all the styles can be done within tags, it is considered the most popular CSS library . `Daisyui` is a library on top of Tailwindcss, it is a component library and make developing components fairly easy by simply adding a class name to get a beautiful component with minimum styles, for example if we need a button, simply add `class="btn"` to get a basic styled button, if we want to customize the color of the button we simply add `class="btn btn-primary"` to get system defined primary color, etc. Daisyui makes building beautiful, good-looking UI pretty easy and offers terrific developer experiences - [daisyui](https://daisyui.com/)

**Vercel**

Vercel is probably the best platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration, and it is my goto hosting platform, it makes deploying projects build with all sorts of frameworks such as Svelte/Sveltekit, React/Next, Vue/Nuxt, Remix, etc. way so much easy and saved us tons of time, Vercel runs so fast and that provides pleasant and enjoyable user experiences - [Vercel docs](https://vercel.com/docs)

<!-- The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web. - [Netlify](https://www.netlify.com/) -->

## Routes

There are client route, server routes, api route. Client routes are User interface that displayed text, images, animations, transition, and executes javascript to interact with visitors / users. Server routes handle tasks on servers side and return the data to pages for rendering. Each page has its own server route, Sveltekit is well known a powerful `SSR` framework, it does all sorts of rendering, and server side render it most used render strategy because with SSR users see the fully rendered page, and there is no need for a loaing indicator, it provides the best user experiences

Each client side page has its own server, all the data are fetched on server side and then injected to be rendered on fontend pages.

### Client Route / Page

**Home Page / Landing Page**

it is expressed in the form of `/` in codes, it is the root directory of the entire application. The home page is composed of six sections, each section is two-column row contains text descriptions and illustration. There is a fixed menu bar at the top, user can login through login menu.

**Auth Page**

`/auth` route as it self-explanins is a page showing login options that allow users to gain authentication / authorization to access functionality. _**SmartShort**_ provides social accounts login such as `Github`, `Google`, `Facebook` and `Discord` for users to easily complete authentication process with a click of a button.

**Dashboard Page**

`/dashboard` route is where authenticated users enter long url and get shortened url or key~`https://domain/3qlms7`, users can get the shortened key by clicking copy button, once the shortend key is pasted into the address bar users will be taken to the original url.

**Detail Page**

`https://domain/3qlms7` route displayed detailed statistics of the click. When the shortened url link you post on social media or in any other pages is clicked, _**ShortMaster**_ collects ip address, country, city, latitude, longitude information and display the location of the person who clicked the link on the map. It helps you visualize and track who is interested in the content from the link you provide and you can go further to promote your services / products, etc.

**+page.svelte**

This file is a client side route or page. For instance, a home page dwells in the `src/routes/` directory, any pages other than home page must live within a folder, for example, an About page is defined in `src/routes/about/+page.svelte`.

**+page.svelte.js**

This file handle tasks on server of that particular page, it belongs to the server of that particular page. For example, dashboard route `src/routes/dashboard` has `src/routes/dashboard/+page.svelte` as UI page and `src/routes/dashboard/+page.server.js` as server route that fetching third party API and return the data to be displayed in UI.

**+page.js** 

This file works both on client and server side, if we execute `console.log` command the messages will appears on browser and terminal console. This file is optional.

**+layout.page**

Layout wraps all the pages, we can place commonly used components such as menu bar, header, footer in layout that shows up in each page.

**+layout.js**

This file works on both client and server side, we fetch data in load function on server side and paste into `_layout.page` and works on all pages. It is called universal load function

**+layout.server.js**

This file works only on server side, it works just like `+page.server.js` but layout wise.

**+server.js**

This file is a standalone api route, we can implement CRUD operations in this file, it can also be accessed from outside of the application


### Server Route

Server routes begin with `+page.server.js`

### API Route

API rounte is a standalone server route

Sveltekit has a very powerful routing system on both client and server side. We can create a stand alone API route that not only access by client side but also outside the application.
The only one API route `src/routes/api/chat/+server.js` in this application contains `GET` and `POST` API codes to handle requests such as read user prompts from client, send it to `OpenAI` server to acquire responses, save data into database, etc.
We can configure our server functions as `edge function`, `serverless function` or `isr function`. In this example `src/routes/api/chat/+server.js` is configured as edge function, other than that are serverless functions and they are default and we don't need to specify. We can also configure all server codes as edge function for instance in `src/routes/api/chat/+server.js` we can specify functions in this file as edge function at the top
```
export const config: Config = {
  runtime: "edge",
};

...
```

or we can configure all the server functions as edge function
```
const config = {
  kit: {
      adapter: adapter(
        {
          edge: true 
        }
      )
  }
}
```

## Third_Party_APIs

**Supabase**

Supabase is an open source Firebase alternative, it plays an important role in this application, it is total backend solution, authentication, database are utilized in this application. - <a href="https://supabase.com/" target="_blank">supabase</a>


**OpenAI**

It is a red hot technology these days. chatbot is included at the bottom right corner of the page and is powered by chatgpt3.5, users are required to enter their own api key to activate conversation with Openai server. - <a href="https://openai.com/" target="_blank">openai</a>


**IPIFY**

It is a simple public IP address API, we can simply get our own api or others on client or server side using fetch function - <a href="https://www.ipify.org/" target="_blank">ipify</a>

```
const res = await fetch(IPIFY);
const ip = await res.text();
```

**IPAPI**

ipapi is a very powerful api that find all sorts of info of an ip address such as city, region country, time zone, latitude, longitude, etc. The ip address is displayed in the form of version 6, i.e. `2402:7500:4ce:693f:400b:fe1:264b:f036` - <a href="https://ipapi.co/" target="_blank">ipapi</a>


## Third_Party_Packages

**supabase auth helpers**

A collection of framework-specific Auth utilities for working with Supabase, it makes implementing auth in route guard easy. - <a href="https://github.com/supabase/auth-helpers" target="_blank">supabase auth helpers</a>

**adapter-vercel**

A SvelteKit adapter that creates a Vercel app. - <a href="https://kit.svelte.dev/docs/adapter-vercel" target="_blank">adapter-vercel</a>

**svelte-toast**

A feather-light and well-tested toast notification component for modern web frontends in very little lines of code. Compiled (into UMD), it's only 20kB minified (8kB gzipped) and can be used in Vanilla JS, or as a Svelte component. - <a href="https://github.com/supabase/auth-helpers" target="_blank">svelte-toast</a>


**tailwindcss**

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. - <a href="https://github.com/supabase/auth-helpers" target="_blank">tailwindcss</a>


**daisyui**

daisyUI is a customizable Tailwind CSS component library that prevents verbose markup in frontend applications. With a focus on customizing and creating themes for user interfaces, daisyUI uses pure CSS and Tailwind utility classes, allowing developers to write clean HTML. - <a href="https://github.com/supabase/auth-helpers" target="_blank">daisyui</a>


**leaflet**

An open source JavaScript library used to build web mapping applications. - <a href="https://github.com/supabase/auth-helpers" target="_blank">leafletjs</a>



**sveltekit-i18n**

- A tiny library with no external dependencies, built for Svelte and SvelteKit. It provides you the most straightforward sveltekit-i18n solution. - <a href="https://github.com/supabase/auth-helpers" target="_blank">sveltekit-i18n</a>



## Supabase_as_BAAS

Supabase plays an important role in this application, it handles all the database CRUD operation including triggers and functions.

### Database

There are two tables involved in this application, they are `url_shortener_clicks` and `url_shortener_links`

**url_shortener_clicks**

Besides default property such as `id`, `created_at`, this table contains key elements associates with click details such as

_link_id_

This propery has relation with `url_shortener_lilnks` id

- Foreign Key Relation: `link.id -> public.url_shortener_links.id`
- Data Type: int8
- Configureation: Primary Key

_ip_

Ip address of the person who click the short link will be collected

- Data Type: varchar
- Configuration: Allow Nullable

_country_

Country of the person who click the short link will be collected

- Data Type: varchar
- Configuration: Allow Nullable

_city_

City of the person who click the short link will be collected

- Data Type: varchar
- Configuration: Allow Nullable

_latitude_

Latitude of the person who click the short link will be collected and user location will be displayed on the map

- Data Type: varchar
- Configuration: Allow Nullable

_longitude_

Longitude of the person who click the short link will be collected and user location will be displayed on the map

- Data Type: varchar
- Configuration: Allow Nullable

_language_

- Data Type: varchar
- Configuration: Allow Nullable

**ulr_shortener_links**

This table contains the following properties

_user_id_

Once user login, his email will be stored in this column, and the user can only see his/her short link data based upon this user_id

- Data Type: text
- Configuration: Primary Key

_key_

Once user enter long url and hit shorten button, the system automatically generate a six random figures and stored in this key property

- Data Type: text
- Configuration: Primary Key && Unique

_long_url_

After user enter a long url, it will be stored in long_url property.

- Data Type: text
- Configuration: Allow Nullable

_total_clicks_

This property records total clicks of a short link

- Data Type: numeric
- Default Value: '0'::numeric

**Supabase has some powrful database utilities that does magic tricks, in this applcation a `Trigger` and `Function` is applied.**

Triggers:

- name: increment_total_clicks_trigger
- tablle : url_shortener_clicks
- function: increment_total_clicks_on_links
- events: after insert

Functions:

- name: increment_total_clicks_on_links
- return type: trigger
- definition:

```
begin
  update public.url_shortener_links
  set total_clicks = total_clicks + 1
  where id = new.link_id;
  return new;
end;
```

### Authentication

There are four auth providers used in this application, they are `Github`, `Google`, `Notion` and `Discord` respectively, in order to activate each provider we have to fill out `Client ID` and `Client Secret`, and paste `Redirect URL` to each provider to redirect to dashboard page once user has logged in.

There are two sections we have to configure

**Providers**

```
Client ID
i.e. 1091324580779540600

Client Secret
i.e. JzKDZxHm08epo-O-TJh8bwY17byPSy81

Redirect URL
https://yourprojectid.supabase.co/auth/v1/callback
```


**URL Configuration**

_Site URL_

- The base URL of your website, for instance
```
development mode
http://localhost:5173

production mode
https://shortmaster.vercel.app
```

_Redirect URLs_

- URLs that auth providers are permitted to redirect to post authentication. Wildcards are allowed, for example
```
development mode
http://localhost:5173/dashboard

production mode
https://shortmaster.vercel.app/dashboard
```


For further info please read [Social Login](https://supabase.com/docs/guides/auth/social-login) from Supabase documents.




## Environment_Variables

In order to make the application gets up and running, we need to create a `.env` file under root directory, copy the following codes and paste into it. There are four different third party services applied in this application and all of them require API key, they are `supabasebase`, `openai`, `ipify`, `ipapi` respectively. One thing to notify is the abbreviation~ `PUBLIC_`, it means the API is exposed in the browser, it is because we perform _CRUD_ operation on client side and _Sveltekit_ requires the environment variables have to be public.
On the other hand, if the environment variables are imported in server file then there is no `PUBLIC_` abbreviation and is not exposed in browser.

```
# Supabase Config
PUBLIC_SUPABASE_URL = "Your key"
PUBLIC_SUPABASE_KEY = "Your key"

# development mode
PUBLIC_APP_BASE_URL = "http://localhost:5173"

# production mode
PUBLIC_APP_BASE_URL = "https://shortmaster1.vercel.app"

OPENAI_KEY = "Your OpenAI key"

IPIFY = "https://api.ipify.org"

IPAPI = "https://ipapi.co/json/?key=YourAPIKey>"
```

## Get_Project_Up_And_Running

- First download this repo into your desktop and unzip it
- open this project folder with your favorite editor
- open terminal and type `npm i` to install the necessary dependencies
- register a Supabase account and follow the above mentioned steps
- create a `.env` file in root directory, and fill out the api key based upon the above mentioned steps
- type `npm run dev` to start server

