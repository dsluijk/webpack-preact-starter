import { h, render } from "preact";

import Router from "./router/Router";

import "./global.scss";

let node: Element;

/**
 * Start the application.
 */
const start = () => {
  node = render(<Router />, document.body, node);
};

/**
 * Enable hot reloading for development
 */
if (module.hot) {
  module.hot.accept("./router/Router", () => requestAnimationFrame(start));
}

/**
 * Include the debug code if it's a development build.
 */
if (DEBUG) {
  import("preact/debug");
}
start();
