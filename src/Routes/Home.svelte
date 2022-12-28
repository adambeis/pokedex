<script>
  import { onMount } from "svelte";
  import InfiniteScroll from "svelte-infinite-scroll";

  import Pokemon from "../lib/Pokemon.svelte";

  import { p } from "../store/Pokedex";
  import { searchName } from "../store/Search";

  let data = [];
  let allPokemon = [];
  let pokemonList = [];
  let size = 20;
  let page = 0;
  let word = "";

  $: word, ((pokemonList = []), (page = 0));
  $: pokemonList = [
    ...pokemonList,
    ...allPokemon
      .filter((pok) => pok.name.includes(word))
      .slice(size * page, size * (page + 1)),
  ];

  const getAllPokemon = async () => {
    try {
      p.subscribe(async (pd) => {
        data = await pd.getPokemonsList();
        allPokemon = data.results;
        page = 0;
      });
    } catch (e) {
      console.log(e);
    }
  };

  onMount(() => {
    searchName.subscribe((txt) => {
      word = txt;
    });
    getAllPokemon();
  });
</script>

<div id="pokemonList" class="pokemon-list grid md:grid-cols-2 lg:grid-cols-3">
  {#each pokemonList as pokemon}
    <Pokemon url={pokemon.url} />
  {/each}
  <InfiniteScroll threshold={500} on:loadMore={() => page++} window={true} />
</div>
