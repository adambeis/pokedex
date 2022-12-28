<script>
  import { fade } from "svelte/transition";

  import { link } from "svelte-spa-router";
  import img from "../assets/not_found.jpg";
  export let params;
</script>

<div transition:fade class="w-full mt-24">
  <img class="m-auto rounded-lg" src={img} alt="" />
  <div class="flex mt-8">
    <a class="m-auto" use:link href="/">
      <button
        class="bg-poke-color px-4 py-3 rounded-full font-semibold border border-4 borde-white"
        >Back To Home</button
      >
    </a>
  </div>
</div>
