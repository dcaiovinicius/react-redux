import React from 'react';
import { Provider } from 'react-redux';

import store from './store/configureStore';

import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
