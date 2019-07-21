import { Component, h } from "preact";

import AsyncRoute from "preact-async-route";
import PreactRouter from "preact-router";

import Loading from "./Loading";
import LoadingFailed from "./LoadingFailed";
import NotFound from "./NotFound";

/**
 * Router of the application.
 */
export default class Router extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <PreactRouter>
        <AsyncRoute
          path="/"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage("Home")}
        />
        <AsyncRoute
          path="/other"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage("Other")}
        />
        <NotFound default />
      </PreactRouter>
    );
  }

  /**
   * Load a page asynchronously.
   *
   * @param page Page name to import
   * @return The JSX of the imported page.
   */
  private async fetchPage(page: string): Promise<JSX.Element> {
    try {
      const module = await import(`../views/${page.toLowerCase()}/${page}`);
      return module.default;
    } catch (e) {
      console.log(e);
      return LoadingFailed as any;
    }
  }
}
