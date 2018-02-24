import React from 'react'
import {Link,withRouter} from 'react-router-dom'
 class Footer extends React.PureComponent{
	click(){
	//	console.log(1)
		this.props.history.push({pathname:'/project',state:{uu:1}})
	}
	render(){
		let  arr=[];
		this.props.data.forEach((item)=>{
			arr.push(<a href="#" key={item} onClick={()=>{this.props.click(item)}} style={{color:this.props.active===item?'red':'#000',marginLeft:'10px'}}>{item}</a>)
		})
		return (
			<footer>
				{arr}
				<a onClick={()=>{this.click()}}   to='/project'>go to project</a>
			</footer>
		)
	}
}
export default withRouter(Footer)
