import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory} from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { configure } from './store/configureStore';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = configure();
let unsubscribe = store.subscribe(() => {
	console.log('current state');
	console.log(store.getState());
});
// unsubscribe()

ReactDOM.render(
	<Provider store={store}>
	  <ConnectedRouter history={ createHistory() } >
	    <div>
	      <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
	    </div>
	  </ConnectedRouter>
	</Provider>,document.getElementById('root'));
registerServiceWorker();

