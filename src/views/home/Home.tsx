import { Component, h } from "preact";

import style from "./Home.scss";

/**
 * Home page.
 */
export default class Home extends Component<{}, IHomeState> {
  /**
   * Handle the component mount.
   */
  public componentWillMount(): void {
    this.setState({
      clicked: 0
    });
  }

  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Home</h1>
        <p class={style.blue}>
          This is the homepage, click <a href="/other">here</a> to go to the
          other page.
        </p>
        <button onClick={() => this.click()}>
          This button has been clicked {this.state.clicked} times
        </button>
      </main>
    );
  }

  /**
   * Handle a button click
   */
  public click(): void {
    this.setState({ clicked: this.state.clicked + 1 });
  }
}

/**
 * State of the component.
 */
interface IHomeState {
  clicked: number;
}
