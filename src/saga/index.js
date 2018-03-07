import {fetchTask} from '../server'
import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

function* getProject(){
	yield put ({type:'REQUEST_PROJECT',flag:true}) ;
	const data=yield call(fetchTask);
	yield put ({type:'RECEIVE_PROJECT',data})
}

export  function* fetchProject(){
	yield* takeEvery('FETCH_PROJECT', getProject);
}
export function* reFresh(){
	yield* takeLatest('FETCH_TT', getProject)
}
