import React from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends React.PureComponent{
	render(){
		let  arr=[];
		this.props.data.forEach((item)=>{
			arr.push(<a href="#" key={item} onClick={()=>{this.props.click(item)}} style={{color:this.props.active===item?'red':'#000',marginLeft:'10px'}}>{item}</a>)
		})
		return (
			<footer>
				{arr}
				<Link to='/project'>go to project</Link>
			</footer>
		)
	}
}
