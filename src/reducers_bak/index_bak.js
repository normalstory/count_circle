/*for redux 2 redusers */

// import React .. ㅋㅋ   -> 리듀서는 'type'별로 실행한 경로를 분기처리하는 곳! 
import * as types from '../actions/ActionTypes';

// 1)초기상태정의 
const initialState = {
    color: 'black',
    number: 0
}

//2)상태(초기상태포함)와 액션(key = action.type)을 파라미터로 하는 분기처리 함수작성  
function counter(state=initialState, action){
    switch (action.type) {
        case types.INCREMENT:
            return{
                ...state,
                //number: number+1 틀~
                number: state.number+1
            };    
        case types.DECREMENT:
            return{
                ...state,
                //number: number-1 틀~
                number: state.number-1
            }
        case types.SET_COLOR:
            return{
                ...state,
                //color: color 틀~
                color: action.color
            }
        default:
            return state
    }
}

export default counter;