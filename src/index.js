import React from 'react';
import ReactDOM from 'react-dom';

//Components
import App from './components/App';

//Mobx
import store from './stores';
import {Provider} from 'mobx-react';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('csftool-content')
);

