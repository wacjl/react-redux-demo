import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Home extends React.PureComponent{
	componentDidMount(){
		console.log('mount')
	}
	render(){
		console.log('主页更新')
		return (
			<div>
		    <h2>Home</h2>
		    <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		        <li><Link to="/topics">Topics</Link></li>
		      </ul>
		       <div>
		         dsadasd
		         <Route path="/about" component={About} />
		          <Route  path="/topics" component={Topics}/>
		       </div>
		  </div>
		)
	}
}


const About = () => (
  <div>
     oooo
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) =>{
	console.log(match)
	return  (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
}

const BasicExample = () => (
  <Router>
    <div>

      <Route  path="/" component={Home}>
      
     </Route>
     
    </div>
  </Router>
)
export default BasicExample