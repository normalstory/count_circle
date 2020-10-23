/*for redux 1 action 2)(각 개별 구성 속성 포함된)액션 생성자 함수 작성 */

//import React from 'react';  아, 여기도 아니네.. 액션만을 위한...import 
import * as types from './ActionTypes';

// 람다함수는 () => ()로 표현   
// increment를 언제쓰나했더니, redux 용이 아니라? react용?이네..  ->container에서 리덕스랑 리액트 연동하는 dispatch함수에서 사용! 
export const increment = (index) => ({
    //함수를 통해 생성하되는 각 액션의 기본 속성을 {}안에 기록한다 
    type: types.INCREMENT,
    index                
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const set_color = ({index, color}) => ({
    type: types.SET_COLOR,
    color, //: color
    index
});


//**for 카운터 기능 확장, 02 액션함수 추가, 기존 액션들에 index추가*/
export const create = (color) => ({
    type: types.CREATE,
    color //기본색상을 받기위해 
})
export const remove = () => ({
    type: types.REMOVE //
})