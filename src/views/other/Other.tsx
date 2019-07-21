import { Component, h } from "preact";

import style from "./Other.scss";

/**
 * Other page.
 */
export default class Other extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Other page</h1>
        <p class={style.green}>
          This is the other page, with not much content.
        </p>
        <a href="/">Go back home</a>
      </main>
    );
  }
}
