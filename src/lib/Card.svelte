<script>
  import { fly } from "svelte/transition";
  import Stat from "./Stat.svelte";
  import Evolution from "./Evolution.svelte";
  import { colours } from "../utils/TypeColor.js";
  import Content from "./Content.svelte";
  import Info from "./Info.svelte";

  export let pokemon;
  let maxStat = 255;

  $: {
    let max = 0;
    if (pokemon) {
      pokemon.stats.forEach((stat) => {
        if (stat.base_stat > max) max = stat.base_stat;
      });
      maxStat = max;
    }
  }
</script>

{#if pokemon}
  <div
    in:fly={{ y: 200, duration: 1000 }}
    out:fly={{ y: 200, duration: 1000 }}
    class="p-2 text-2xl text-center"
  >
    <div class="grid gap-4">
      <div class="lg:flex md:m-auto">
        <div class="p-4 m-auto">
          <Content
            {pokemon}
            classNameC="hidden lg:block text-3xl"
            classNameP="p-8"
          />
        </div>
        <div class="lg:w-2/3">
          <h1 class="lg:hidden text-3xl text-center font-semibold mt-2">
            {pokemon.name}
          </h1>
          <div
            class={`grid grid-cols-${pokemon.types.length} text-center gap-2`}
          >
            {#each pokemon.types as type}
              <div class="p-4">
                <h1
                  style="background-color: {colours[type.type.name]};"
                  class="{pokemon.types.length === 1
                    ? 'm-auto w-96 '
                    : ''}rounded-full p-1 font-semibold"
                >
                  {type.type.name}
                </h1>
              </div>
            {/each}
          </div>

          <div class="grid grid-cols-2">
            <Info value={pokemon.weight} measure="KG" name="Weight" />
            <Info value={pokemon.height} measure="M" name="Height" />
          </div>

          <div class="mt-4">
            <h1 class="font-semibold">Base Stats</h1>
            <div class="p-4 grid gap-4 grid-cols-4">
              {#each pokemon.stats as stat}
                <Stat {stat} bind:maxStat />
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="p-4">Evolution</h1>
        <Evolution url={pokemon.species.url} />
      </div>
    </div>
  </div>
{/if}
