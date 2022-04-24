import AppComponent from "./components/AppComponent/AppComponent.js";
import { detail } from "./constants/constants.js";

const app = document.body;

try {
  new AppComponent(app, "div", "app container", detail);
} catch (error) {
  throw new Error("Could not render AppComponent of detail.html");
}
