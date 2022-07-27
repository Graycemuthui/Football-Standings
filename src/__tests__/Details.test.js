import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/ConfigureStore";
import Details from "../components/Details";

describe("Leagues test", () => {
  it("leagues render correctly", () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
