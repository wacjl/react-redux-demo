import { renderRoutes } from 'react-router-config'
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import asyncComponent from '../components/asyncComponent'
const Home=asyncComponent(()=>(import('../components/demandHome')))
const Child=asyncComponent(()=>(import('../components/demandChild')))
const Root = ({ route }) => (

  <div>
    <h1>Root
    	<Link to="/child/1">child-1</Link>
    </h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)
const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
)
const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/child/:id',
        component: Child,
        routes: [
          { path: '/child/:id/grand-child',
            component: GrandChild
          }
        ]
      }
    ]
  }
]

const Main=()=>{
	  return (
	  	<BrowserRouter>
		    {/* kick it all off with the root route */}
		    {renderRoutes(routes)}
		  </BrowserRouter>
	  )
}

export default Main