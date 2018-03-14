import React from 'react'
import Count from '../App'
import asyncComponent  from '../components/asyncComponent'
const Project=asyncComponent(()=>(import('../container/project')))
function Test(props){
	console.log(props)
	return (
		<div>
			{props.match.params.id}
		</div>
	)
}
const routes=[
	{
		path:'/',
		exact:true,
		component:Count
	},
	{
		path:'/project',
		
		component:Project,
		routes:[
			{
				path:"/project/:id",
				component:Test
			}
			
		]
	}
]

export default routes