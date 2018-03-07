import React from 'react'
import Style from '../css/list.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'
class ListItem extends React.PureComponent{

	render(){
		const props=this.props;
			console.log(props.text)
		return (<li className={classnames({[Style['li-active']]:props.complated})}  onClick={(e)=>props.click(props.index,e)}>{props.text}</li>)
	}
}
ListItem.propTypes={
	text:PropTypes.string
}

export default class List extends React.PureComponent{
	constructor(){
		super();
		this.itemClick=this.itemClick.bind(this)
	}
	itemClick(index,e){
	e.stopPropagation()
	//console.log(	e.nativeEvent)
		this.props.click(index)
	}
	ulClick(){
		console.log('事件冒泡')
	}
	render(){
		var arr=[];
		this.props.data.map((item,index)=>{
			
			arr.push(<ListItem click={this.itemClick} index={index}  key={index}  {...item}/>)
		})
		return (
			<ul onClick={this.ulClick}>
				{arr}
			</ul>
		)
	}
}
