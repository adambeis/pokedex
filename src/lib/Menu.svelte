<script>
  import { link } from "svelte-spa-router";
  import { searchName } from "../store/Search";

  let searchText = "";

  $: searchName.set(searchText);

  searchName.subscribe((lbl) => {
    if (!lbl && searchText) searchText = "";
  });
</script>

<div class="sticky top-0 bg-poke-color">
  <div>
    <nav class="grid grid-cols-1 md:grid-cols-3 container px-6 py-3 mx-auto ">
      <div />
      <a
        use:link
        class="col-spa2 m-auto p-4 md:p-0 text-xl font-bold md:text-2xl hover:text-blue-500"
        href="/"
      >
        <span class="text-center text-3xl">Pokedex</span>
      </a>

      <div
        class="justify-self-center md:justify-self-end w-48 space-y-4 md:space-y-0 md:items-center md:space-x-10 md:mt-0"
      >
        <form
          class="flex items-center space-x-2 border-2 hover:border-blue-600 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            class="w-full outline-none placeholder-white text-white bg-transparent"
            type="text"
            placeholder="Search"
            bind:value={searchText}
          />
        </form>
      </div>
    </nav>
  </div>
</div>
