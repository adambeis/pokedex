<script>
  import { fade } from "svelte/transition";

  import { p } from "../store/Pokedex";
  import Link from "./Link.svelte";

  export let url;
  let pokemon;

  $: url && getPokemonData();

  const getPokemonData = async () => {
    try {
      p.subscribe(async (pd) => {
        pokemon = await pd.resource(url);
      });
    } catch (e) {
      console.log(e);
    }
  };
</script>

<div transition:fade class="p-2">
  <Link {pokemon} className="text-2xl md:text-xl p-8" />
</div>
