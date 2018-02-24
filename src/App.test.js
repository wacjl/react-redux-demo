import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
/*import Project from './container/project'*/
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from './reducer'
import { Provider } from 'react-redux'
import BasicExample from './router/baseRouter'
import RouteConfigExample from './router/routeConfig'
import MainConfig from './router/routeConfigs'
import reduxRouter from './router/reduxRouter'
import {ConnectedRouter,routerReducer, routerMiddleware,push} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { renderRoutes } from 'react-router-config'
const history = createHistory()
/*console.log(push)*/
function logMiddleware({ getState, dispatch }){
	return function(next){
		return function(action){
			console.log(getState())
			next(action)
			console.log(getState())
		}
	}
}
let store = createStore(todoApp,applyMiddleware(thunkMiddleware,logMiddleware,routerMiddleware(history)))
/*var Apps=()=>{
	return (
		<Provider store={store}>
		   <div>
		   		 <App /><Project/>
		   </div>
		  </Provider>
	)
}*/

const ReduxRouter=()=>{
	return (
		<Provider store={store}>
	    <ConnectedRouter history={history}>
	     	{renderRoutes(reduxRouter)}
	    </ConnectedRouter>
	  </Provider>
	)
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReduxRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
