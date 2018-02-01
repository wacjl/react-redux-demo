import React from 'react'
import Style from '../css/list.css'
import classnames from 'classnames'

class ListItem extends React.PureComponent{

	render(){
		const props=this.props;
			console.log(props.text)
		return (<li className={classnames({[Style['li-active']]:props.complated})}  onClick={()=>props.click(props.index)}>{props.text}</li>)
	}
}
export default class List extends React.PureComponent{
	constructor(){
		super();
		this.itemClick=this.itemClick.bind(this)
	}
	itemClick(index){
		this.props.click(index)
	}
	render(){
		var arr=[];
		this.props.data.map((item,index)=>{
			
			arr.push(<ListItem click={this.itemClick} index={index}  key={index}  {...item}/>)
		})
		return (
			<ul>
				{arr}
			</ul>
		)
	}
}
