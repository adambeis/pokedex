<script>
  import { onMount } from "svelte";
  import Card from "../lib/Card.svelte";

  import { p } from "../store/Pokedex";
  import { searchName } from "../store/Search";

  export let params;

  let pokemon;

  $: params, getData();

  const getData = async () => {
    try {
      p.subscribe(async (pd) => {
        pokemon = await pd.getPokemonByName(params.id);
      });
    } catch (e) {
      console.log(e);
    }
  };
  onMount(() => {
    searchName.set("");
  });
</script>

<Card {pokemon} />
