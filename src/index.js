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
//console.log(push)
function logMiddleware({ getState, dispatch }){
	return function(next){
		return function(action){
		//	console.log(getState())
			next(action)
			//console.log(getState())
		}
	}
}

let store = createStore(todoApp,applyMiddleware(thunkMiddleware,logMiddleware,routerMiddleware(history)))
//let store = createStore(todoApp,{visiblity:"show_active"},applyMiddleware(thunkMiddleware,logMiddleware,routerMiddleware(history)))
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
ReactDOM.render(<ReduxRouter/>, document.getElementById('root'));
registerServiceWorker();

/*import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'


import { Redirect ,Route, Switch} from 'react-router-dom'

const history = createHistory()

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

const authFail = () => ({
  type: 'AUTH_FAIL'
})

const initialState = {
  isAuthenticated: false
}

const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}
console.log(applyMiddleware(routerMiddleware(history)))
const store = createStore(
  combineReducers({ routerReducer, authReducer }),
  applyMiddleware(routerMiddleware(history)),
)

class LoginContainer extends React.Component {
  render() {
  	console.log(this.props)
    return <button onClick={this.props.login}>Login Here!</button>
  }
}

class HomeContainer extends React.Component {
  componentWillMount() {
    alert('Private home is at: ' + this.props.location.pathname)
  }

  render() {
  	console.log(this.props)
    return <button onClick={this.props.logout}>Logout Here!</button>
  }
}

class PrivateRouteContainer extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          )
        }
      />
    )
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: state.authReducer.isAuthenticated
}))(PrivateRouteContainer)

const Login = connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push({pathname:'/',params:1,state:{data:2}}))
  }
}))(LoginContainer)

const Home = connect(null, dispatch => ({
  logout: () => {
    dispatch(authFail())
    dispatch(push({pathname:'/login',state:{data:2}}))
  }
}))(HomeContainer)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/:id" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)*/