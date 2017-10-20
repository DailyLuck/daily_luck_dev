import * as redux from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { changeHoverStatusReducer,
         resizeWindowReducer,
         calendarChangeReducer }
from '../reducers/reducers';

const history = createHistory();
export const configure = (initialState = {}) => {
	const reducer = redux.combineReducers({
      hover: changeHoverStatusReducer,
      windowInnerWidth: resizeWindowReducer,
      calendar: calendarChangeReducer,
      router: routerReducer
    });
    let store = redux.createStore(reducer, initialState, redux.compose(
      redux.applyMiddleware(thunk),
      redux.applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store; 
}