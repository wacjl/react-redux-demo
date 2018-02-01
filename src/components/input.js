import React from 'react'
import { Button } from 'antd';
export default class Input extends React.PureComponent{
	
	comfirm(){
		this.props.comfirm(this.refs.input.value.trim())
		this.refs.input.value=''
	}
	render(){
		console.log('input render')
		return (
			<div>
				<input ref="input"/>
				<Button onClick={e=>this.comfirm()}>确定</Button>
			</div>
		)
	}
}
