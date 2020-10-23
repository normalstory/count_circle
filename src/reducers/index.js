//**for 카운터 기능 확장, 03 리듀서 새로 작성*/

import * as types from '../actions/ActionTypes';

//초기상태 정의 
const initailState = {
    counters : [  //counters 배열만들기 
        {
            color : 'black',
            number : 0
        }
    ]
};


//카운터 추가삭제 구현 
function counter(state=initailState, action){

    const {counters} = state; //래퍼런스 생성 

    switch (action.type) {
        case types.CREATE:
            return {
                counters :  [// 틀 , 수정 .. <- 빠뜨리고 안적었던 부분..
                    ...counters,
                    {
                        color : action.color,
                        number : 0
                    }
                ]
            }
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length -1)
            };

        case types.INCREMENT:
            //return({ number: counters.number+1 })
            return {
                counters : [  // 틀 , 수정 .. <- 빠뜨리고 안적었던 부분.. 
                ...counters.slice(0, action.index), //(새로 생기는 덩어리들)선택한 인덱스의 전 아이템들
                { //기존 객체(실제 할 일) 
                    ...counters[action.index], 
                    number: counters[action.index].number+1
                },
                ...counters.slice(action.index+1, counters.length) //(새로 생기는 덩어리들)선택한 인덱스의 다음 아이템들 
            ]}
        case types.DECREMENT:
            return{
                counters : [
                ...counters.slice(0, action.index),
                {
                    ...counters[action.index],
                    number: counters[action.index].number-1
                },
                ...counters.slice(action.index+1, counters.length)
            ]}
        case types.SET_COLOR:
            return{
                counters : [
                //...counters.slice(0, action.index.color),
                ...counters.slice(0, action.index),
                {
                    ...counters[action.index],
                    //color: counters[action.index].color
                    color: action.color
                },
                ...counters.slice(action.index+1, counters.length)
            ]}
        default:
            return state;
    }
}
export default counter;