import AppComponent from "./components/AppComponent/AppComponent.js";
import { myPokemon } from "./constants/constants.js";

const app = document.body;

try {
  new AppComponent(app, "div", "app container", myPokemon);
} catch (error) {
  throw new Error("Could not render AppComponent of my-pokemon.html");
}
