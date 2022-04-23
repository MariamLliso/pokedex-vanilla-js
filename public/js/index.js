import AppComponent from "./components/AppComponent/AppComponent.js";
import { pokedex } from "./constants/constants.js";

const app = document.body;

try {
  new AppComponent(app, "div", "app container", pokedex);
} catch (error) {
  throw new Error("Could not render AppComponent of index.html");
}
