<script>
  import { link } from "svelte-spa-router";
  import Content from "./Content.svelte";

  export let pokemon;
  export let className;
</script>

{#if pokemon}
  <div class="m-auto">
    <a use:link href={`/pokemon/${pokemon.id}`}>
      <Content {pokemon} classNameC="" classNameP={className} />
    </a>
  </div>
{/if}
