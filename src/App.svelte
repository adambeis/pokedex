<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Menu from "./lib/Menu.svelte";
</script>

<Menu />
<Router {routes} />
