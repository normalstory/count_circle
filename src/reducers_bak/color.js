/*for redux 5 고도화 1)리듀서를 용도별로 나눠서 사용하기  */
// import * as types from '../actions';
import * as types from '../actions/ActionTypes';

const initialState = {
    color : 'black'
}


// const propTypes = (state = inititain, action) =>({
//     switch (action.type) {
//         case type.increment:
//             retrun{
//                 ...state,
//                 number:state.number
//             }
//         default:
//             return status;
//     }
// })   
// *틀1 - 암기의 한계... ㅜ 게다가 이건 숫자 ㅋ 그래도 큰 키워드는 뭐 대충 ㅎ 
// 복습 : 리듀서는 액션이 스토어로 들어가는 관문, 액션을 switch로 분기처리하는 역할 수행. 들어온 값이 없을때를 위해 초기값은 필수로 등록 


// 1) 초기화 
// const initialState = {
//     color : 'black'
// }

// const color = (state = initialState, action) => ({
    // ...state,
    // color: action.color   
    // *틀2 - switch 

    // switch (action.types) {
    //     case : type.INCREMENT
    //         return{
    //             color: action.color
    //         };
    //     default:
    //         return state;
    // }
    // *틀3 - types과 type구분 못함(이해못함, 그냥 암기), 관성코딩(color와 number 구분 못함) 
    // 복습 - action은 그냥 변수, 가르키는 바는 액션함수, action.type은 액션함수의 속성 type값
    //        액션함수의 속성 type값들이 type.INCREMENT 형태로 되어 있음 
    
// });


function color(state=initialState, action){
    switch (action.type) {
        case types.SET_COLOR:
            return{
                ...state,
                color:action.color
            }
        default:
            return state;
    }
};

export default color;