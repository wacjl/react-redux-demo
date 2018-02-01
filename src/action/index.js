import {fetchTask,getTaskP} from '../server'

//定义action类型
export const ADD_TODO="ADD_TODO";
export const ADD_TODO_TOOGLE="ADD_TODO_TOOGLE"
export const VISIBLITY_FILTER="VISIBLITY_FILTER"
export const REQUEST_PROJECT="REQUEST_PROJECT"
export const RECEIVE_PROJECT="RECEIVE_PROJECT"
export const RECEIVE_TASK_P="RECEIVE_TASK_P"
//定义其他常量
export const visiblity={
	 SHOW_ALL: 'SHOW_ALL',
	 SHOW_COMPLETED: 'SHOW_COMPLETED',
	 SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//定义action 函数

export function addTOdo(text){
	return {
		type:ADD_TODO,
		text
	}
}

export function addTodoToogle(index){
	return {
		type:ADD_TODO_TOOGLE,
		index
	}
}

export function visiblityFilter(filter){
	return {
		type:VISIBLITY_FILTER,
		filter
	}
}

export function requestProject(isRequest){
	return {
		type:REQUEST_PROJECT
	}
}
export function receiveProject(data){
	console.log(2)
	return {
		type:RECEIVE_PROJECT,
		data
	}
}

export function isRequestProject(){
	return async (dispatch,getState)=>{
		if(!getState().project.isRequest){
			dispatch(requestProject());
			const data= await fetchTask();
			dispatch(receiveProject(data))
		}
	}
}

export function receiveTaskP(data){
	return {
		type:RECEIVE_TASK_P,
		data
	}
}
export function isRequestTaskPro(id){
	return async (dispatch,getState)=>{
		if(!getState().project.isRequest){
			//dispatch(requestProject());
			const data= await getTaskP(id);
			dispatch(receiveTaskP(data.project))
		}
	}
}
