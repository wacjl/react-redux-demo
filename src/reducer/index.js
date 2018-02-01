import {ADD_TODO,ADD_TODO_TOOGLE,VISIBLITY_FILTER,REQUEST_PROJECT,RECEIVE_PROJECT,RECEIVE_TASK_P} from '../action'
import {combineReducers} from 'redux'
function visiblity(visiblity="show_all",action){
	switch(action.type){
		case VISIBLITY_FILTER:return action.filter;break;
		default: return visiblity;
	}
}
function todos (todos=[],action){
	switch (action.type){
		case ADD_TODO:return [...todos,{complated:false,text:action.text}];break;
		case ADD_TODO_TOOGLE:
				const data=todos[action.index];
				return [...todos.slice(0,action.index),Object.assign({},data,{complated:!data.complated}),...todos.slice(action.index+1)];break;
		default:return todos
	}
}
function footer(footers=['show_all','show_completed','show_active']){
	return footers
}

function project(state={isRequest:false,item:[]},action){
	switch(action.type){
		case REQUEST_PROJECT:
			return Object.assign({},state,{isRequest:true})
			break;
		case RECEIVE_PROJECT:
		return Object.assign({},state,{isRequest:false,item:action.data})
		break;
		default :return state;
	}
}

function taskP(state={},action){
	switch (action.type){
		case RECEIVE_TASK_P:
				return action.data; break;
		default :return state
	}
}

const todoApp = combineReducers({
  visiblity,
  todos,
  footer,
  project,
  taskP
})

export default todoApp;