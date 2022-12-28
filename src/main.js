import "./app.postcss";
import App from "./App.svelte";
import { Pokedex } from "pokeapi-js-wrapper";
import { p } from "./store/Pokedex";

const init = async () => {
  const customOptions = {
    cache: true,
    cacheImages: true,
  };
  p.set(new Pokedex(customOptions));
};
init();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
