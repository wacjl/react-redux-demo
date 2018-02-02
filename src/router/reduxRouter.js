
import Count from '../App'
import asyncComponent  from '../components/asyncComponent'
const Project=asyncComponent(()=>(import('../container/project')))
const routes=[
	{
		path:'/',
		exact:true,
		component:Count
	},
	{
		path:'/project',
		exact:true,
		component:Project
	}
]

export default routes