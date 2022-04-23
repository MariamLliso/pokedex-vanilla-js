import AppComponent from "./components/AppComponent/AppComponent.js";
import { pokedex } from "./constants/constants.js";

const app = document.body;

new AppComponent(app, "div", "app container", pokedex);
