<script>
  import { prominent } from "color.js";

  export let pokemon;
  export let classNameP;
  export let classNameC;

  let color;
  let textColor = "#ffffff";

  $: pokemon, main();

  const main = async () => {
    if (pokemon) {
      let url = pokemon.sprites.other["official-artwork"].front_default;
      color = await prominent(url, { amount: 5, group: 20 });
      color = color[1];
      let constrast = color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114;
      if (constrast > 195) textColor = "#000000";
      else textColor = "#ffffff";
    }
  };
</script>

{#if pokemon && color}
  <div
    class={`rounded-2xl ${classNameP}`}
    style={`background-color: rgb(${color[0]},${color[1]},${color[2]});`}
  >
    <h1 style={`color: ${textColor};`} class="text-right">
      #{pokemon.id}
    </h1>
    <img
      class="m-auto"
      src={pokemon.sprites.other["official-artwork"].front_default}
      loading="lazy"
      alt=""
      srcset=""
    />
    <h1 style={`color: ${textColor};`} class={`text-center ${classNameC}`}>
      {pokemon.name}
    </h1>
  </div>
{/if}
