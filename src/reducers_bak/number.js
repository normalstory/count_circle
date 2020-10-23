/*for redux 5 고도화 1)리듀서를 용도별로 나눠서 사용하기  */
// import * as types from '../actions';
import * as types from '../actions/ActionTypes';

const initialState = {
    number : 0
}

// export function number(state=initialState, action){
//     switch (action.type) {
//         case types.INCREMENT:
//             return{
//                 ...state,
//                 number: state.number+1
//             }
//         case types.DECREMENT:
//             return{
//                 ...state,
//                 number: state.number+1
//             }
//         default:
//             break;
//     }
// }

// = 같은코드 ...그런데 문제는 그게 아니라... () => {}와 ()=>({})를 구분하지 못하고 있다  

/*복습(a,b,c,d,k는 매개변수 또는 파라미터,  x:y는 객체 리터럴 표현)
  1) 기본-1  (a) => {...}
  2) 기본-2   a  => {...}
  3) 기본-3   () => {...}
  4) 기본-4  (a,b) => {...}
  5) 고급-1  a => ( {x:y} )
  6) 고급-2  (a=k, b) => {...}
  7) 고급-3  var f = ([a,b]=[1,2], {k,c}={k=a+b}) => a+b+c
             f();//6
  출처 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98 
  */
const number = (state=initialState, action) =>{
    switch (action.type) {
        case types.INCREMENT:
            return{
                ...state,
                number: state.number+1
            }
        case types.DECREMENT:
            return{
                ...state,
                number: state.number-1
            }
        default:
            return state;
    }
};
export default number;
