<script>
  import chatbot from "$lib/assets/images/chat.png";

  export let width = "40"
</script>

<img
  src={chatbot}
  alt=""
  {width}
  class="icon-chatbot"
/>

<!-- <svg 
  xmlns="http://www.w3.org/2000/svg" 
  class="ionicon bg-secondar" 
  viewBox="0 0 512 512"
  width="30"
>
  <title>Chatbox Ellipses</title>
  <path
    d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
    fill="none"
    class="bg-secondar"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
  />
  <circle cx="160" cy="216" r="32" fill="currentColor" />
  <circle
    cx="256"
    cy="216"
    r="32"
    fill="currentColor"
  />
  <circle cx="352" cy="216" r="32" fill="currentColor" />
</svg> -->

<style>
  .icon-chatbot {
    border-radius: 50%;
  }
</style>
