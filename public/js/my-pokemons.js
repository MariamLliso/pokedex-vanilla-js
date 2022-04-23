import AppComponent from "./components/AppComponent/AppComponent.js";
import { myPokemon } from "./constants/constants.js";

const app = document.body;

new AppComponent(app, "div", "app container", myPokemon);
