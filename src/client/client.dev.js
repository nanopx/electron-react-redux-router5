import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import DevTools from '../containers/DevTools';
import createRouter from '../createRouter';
import Root from '../Root';

const reactRoot = window.document.getElementById('app');
const router = createRouter();
const store = configureStore(router);

/**
 * Fire-up Router5.
 */
router.start(() => {
  const initialComponents = (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Root>
          <DevTools />
        </Root>
      </RouterProvider>
    </Provider>
  );

  ReactDOM.render(initialComponents, reactRoot);
});
