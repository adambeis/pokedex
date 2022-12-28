<script>
  import { onMount } from "svelte";
  import { p } from "../store/Pokedex";
  import Link from "./Link.svelte";

  export let url;

  let pokemonData;
  let chain = [];

  onMount(async () => {
    try {
      p.subscribe(async (pd) => {
        let species = await pd.resource(url);
        let evolution = await pd.resource(species.evolution_chain.url);

        let promises = [];
        chain = evolution.chain.evolves_to;

        let pokemon = pd.getPokemonByName(evolution.chain.species.name);
        promises.push(pokemon);

        while (chain.length > 0) {
          chain = chain[0];
          pokemon = pd.getPokemonByName(chain.species.name);
          promises.push(pokemon);
          chain = chain.evolves_to;
        }
        pokemonData = await Promise.all(promises);
      });
    } catch (e) {
      console.log(e);
    }
  });
</script>

{#if pokemonData}
  <div class="pokemon-list grid text-center lg:flex">
    {#each pokemonData as pokemon, i}
      <Link {pokemon} className="p-8" />
      {#if i < pokemonData.length - 1}
        <div class="lg:hidden">
          <svg
            class="m-auto"
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div class="hidden lg:block m-auto">
          <svg
            class="m-auto"
            width="70"
            height="70"
            viewBox="2 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              fill="currentColor"
            /></svg
          >
        </div>
      {/if}
    {/each}
  </div>
{/if}
