//**for 카운터 기능 확장, 06 카운터 목록 컴포넌트를 위한 컨테이너 컴포넌트생성 */

//자.. 컨테이너는 연결해줘. 리덕스store와 리액트prop. 
//그러려면 import해야해. 대상 컨테이너CounterList, 컨테이너 요소를 호명할 명단action, 연결해주는 connect   
import CounterList from '../components/CounterList';
//import * as types from '../actions';
import * as actions from '../actions';
import {connect} from 'react-redux';
import getRandomColor from '../libs/getCounterColor';

//그리고 state와 액션Dispatch을 연결하는 함수작성 
// const mapStateToProps = (state, actions) =>(    
//     this.setState(
//         ...counters,
//         [
//             ...state,
//             {
//                 index: state.index,
//                 Number: state.number,
//                 color : actions.color
//             }
//         ]
//     )
// );
// const mapDispatchToProps = (Disparch, actions) =>{
//     this.setState(
//     )
// };
//-> 틀: 리듀서랑 헷갈렸다 

//porps는 용도에 맞게 1개씩만, 내용은 뭉태기니까 뭉태기만 
const mapStateToProps= (state) => ({counters: state.counters});
//함수는 뭉태기 개념이 아니니까 하나씩, 뭉태기라 구분하기 위해 프리젠테니셔널 컴포넌트 추가한 index관련 코드 반영  
const mapDispatchToProps= (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        //랜덤 추가 
        const color = getRandomColor();
        dispatch(actions.set_color({index, color}));
    }
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);
export default CounterContainer;