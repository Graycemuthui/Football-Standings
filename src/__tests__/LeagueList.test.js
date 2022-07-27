import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/ConfigureStore";
import LeaguesList from "../components/LeagueList";

describe("Main test", () => {
  it("leagues render correctl", () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <LeaguesList />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
