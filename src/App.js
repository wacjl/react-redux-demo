import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css' 
import './App.css'
import { List, Set } from 'immutable';
import {createSelector } from 'reselect'
/*const emptyList = List()
const plainArray = [ 1, 2, 3, 4 ]
const listFromPlainArray = List(plainArray)
const plainSet = Set([ 1, 2, 3])
const listFromPlainSet = List(plainSet)
// List [ 1, 2, 3, 4 ]

const arrayIterator = plainArray[Symbol.iterator]()
const listFromCollectionArray = List(arrayIterator)
// List [ 1, 2, 3, 4 ]
console.log(listFromPlainArray.equals(listFromCollectionArray))
console.log(listFromPlainSet.equals(listFromCollectionArray))
 // true
 // true
listFromPlainSet.equals(listFromPlainArray) // true

var list =List.of(1,2,3,4)

var list1=list.set(-1,'uuu')
console.log(list1.equals(list))
console.log(list)
var lisr=list.delete(0)
console.log(List([ 1, 2, 3, 4 ]).pop())
var list = List([ 'a', 'b', 'c' ])
var result = list.update(2, val => val.toUpperCase())
console.log(result)
function sum(collection) {
  return collection.reduce((sum, x) => sum + x, 0)
}

List([ 1, 2, 3 ])
  .map(x => x + 1)
  .filter(x => x % 2 === 0)
  .update(sum)
  console.log(List([ 1, 2, 3 ])
  .map(x => x + 1).filter(x => x % 2 === 0))*/
 import Input from './components/input'
 import { connect } from 'react-redux';
 import Lists from './components/list'
 import {addTOdo,addTodoToogle,visiblityFilter} from './action'
 import Footer from './components/footer'
class App extends Component {
	constructor(){
		super()
		this.addTodo=this.addTodo.bind(this);
		this.itemClick=this.itemClick.bind(this);
		this.footerClick=this.footerClick.bind(this);
	}
	addTodo(text){
		this.props.dispatch(addTOdo(text))
	}
	itemClick(index){
		this.props.dispatch(addTodoToogle(index))
	}
	footerClick(filter){
		this.props.dispatch(visiblityFilter(filter))
	}
	render() {
	  	console.log(this.props)
	  	const {dispatch,todos,visiblity,footer}=this.props
	    return (
	      <div className="App">
	      	<Input comfirm={this.addTodo} />
	      	<Lists data={todos} click={this.itemClick}/>
	      	<Footer click={this.footerClick} data={footer} active={visiblity}/>
	      </div>
	    );
	  }
}
/*function filter(state){
	switch(state.visiblity){
		case 'show_all':return state.todos;break;
		case 'show_completed':return state.todos.filter((item)=>{
			if(item.complated){
				return item
			}
		});break;
		case 'show_active' :return state.todos.filter((item)=>{
			if(!item.complated){
				return item
			}
		});break;
	}
}*/
const  visiblity=(state)=>state.visiblity;
const  todos=(state)=>state.todos
const filter=createSelector([visiblity,todos],(visiblity,todos)=>{
	//console.log(1)
	switch(visiblity){
		case 'show_all':return todos;break;
		case 'show_completed':return todos.filter((item)=>{
			if(item.complated){
				return item
			}
		});break;
		case 'show_active' :return todos.filter((item)=>{
			if(!item.complated){
				return item
			}
		});break;
	}
})
function select(state){
	return {
		visiblity:state.visiblity,
		todos:filter(state),
		footer:state.footer
		
	}
}
export default  connect(select)(App);
