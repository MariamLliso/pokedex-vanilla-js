import AppComponent from "./components/AppComponent/AppComponent.js";
import { detail } from "./constants/constants.js";

const app = document.body;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

try {
  new AppComponent(app, "div", "app container", detail, 0, id);
} catch (error) {
  throw new Error("Could not render AppComponent of detail.html");
}
