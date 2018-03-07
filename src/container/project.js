import React from 'react'
 import { connect } from 'react-redux';
 import {isRequestProject,isRequestTaskPro} from '../action'
 import {Button,Spin} from 'antd'
 import {Link} from 'react-router-dom'
 import {renderRoutes} from 'react-router-config'
 
 function List (props){
 	return (
 		<ul>
 			{props.data.map((item)=>{
 				return <li onClick={()=>{props.click(item.id)}} key={item.id}>{item.title}</li>
 			})}
 		</ul>
 		
 	)
 }
 function Childrens(props){
 	//console.log(props)
 	return (
 		<div>{props.children[0]}</div>
 	)
 }
 
 class Project extends React.PureComponent{
 	constructor(){
 		super();
 		this.request=this.request.bind(this);
 		this.itemClick=this.itemClick.bind(this);
 		this.routerTest=this.routerTest.bind(this);
 	}
 	componentDidMount(){
 		const {dispatch}=this.props
 		console.log(this.props)
 		//dispatch(isRequestProject())
 		dispatch({type:'FETCH_PROJECT'})
 	}
 	request(){
 		const {dispatch}=this.props
 		//dispatch(isRequestProject())
 		dispatch({type:'FETCH_TT'})
 	}
 	itemClick(id){
 		const {dispatch}=this.props
 		dispatch(isRequestTaskPro(id))
 	}
 	routerTest(){
 		console.log(this.props);
 		const {history}=this.props;
 		history.push({
 			pathname:'/project/0',
 			params:{id:0},
 			query:'?sort=name&y=iii',
 			state:{wwew:99}
 		})
 	}
	render(){
		const {project,taskP,route}=this.props;
		//console.log(project)
		return (
			<div style={{marginTop:'60px'}}>
			<div style={{textAlign:'center'}}>
				project
			 <Button type="primary" onClick={this.request}>请求数据</Button>
			</div>
			
			<Spin spinning={project.isRequest}>
				
				<List data={project.item} click={this.itemClick}/>
			</Spin>
				<p>{taskP.name}</p>
				<Link to="/">go to /</Link>
				<Childrens>
					<p>1</p>
					<span>2</span>
				</Childrens>
				<Link to="/project/0">dssa</Link>
				<span onClick={this.routerTest}>跳转传参测试</span>
				{renderRoutes(route.routes)}
			</div>
			
		)
	}
}
function mapState(state){
	return {
		project:state.project,
		taskP:state.taskP
	}
}
export default connect(mapState)(Project)
