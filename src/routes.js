import Home from "./Routes/Home.svelte";
import Details from "./Routes/Details.svelte";
import NotFound from "./Routes/NotFound.svelte";

const routes = {
  "/": Home,
  "/pokemon/:id": Details,
  "*": NotFound,
};

export default routes;
