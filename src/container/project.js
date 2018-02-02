import React from 'react'
 import { connect } from 'react-redux';
 import {isRequestProject,isRequestTaskPro} from '../action'
 import {Button,Spin} from 'antd'
 import {Link} from 'react-router-dom'
 function List (props){
 	return (
 		<ul>
 			{props.data.map((item)=>{
 				return <li onClick={()=>{props.click(item.id)}} key={item.id}>{item.title}</li>
 			})}
 		</ul>
 		
 	)
 }
 
 class Project extends React.PureComponent{
 	constructor(){
 		super();
 		this.request=this.request.bind(this);
 		this.itemClick=this.itemClick.bind(this)
 	}
 	componentDidMount(){
 		const {dispatch}=this.props
 		dispatch(isRequestProject())
 	}
 	request(){
 		const {dispatch}=this.props
 		dispatch(isRequestProject())
 	}
 	itemClick(id){
 		const {dispatch}=this.props
 		dispatch(isRequestTaskPro(id))
 	}
	render(){
		const {project,taskP}=this.props;
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
