import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Leagues from '../components/Leagues';

describe('Leagues test', () => {
  it('leagues render correctly', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Leagues />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
