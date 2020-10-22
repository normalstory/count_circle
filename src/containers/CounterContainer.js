/*for redux 4 container compoenet생성 후 connect로 리덕스(state와 dispatch)를 리액트 props로 연동  */
// 컨포넌트 대신 리덕스 스토어에 접근하는 메신저? 관리자? 역할 so 프리젠테이션, 액션, 스토어를 모두 import 
// 다 작성후, App.js에 컨포넌트 대신 연결 
import Counter from '../components/Counter';
import * as action from '../actions';
import { connect } from 'react-redux';

//주요 역할은 connect로 리덕스(state와 dispatch)를 리액트 props로 연동하는 함수생성 후 connect로 스토어에 연동 


//state 연동 
const mapStateToProps = (state) => ({
    number:state.number,
    color:state.color
});

//(actions/index에 있는)액션함수들 연동 -> '() => dispatch()'로  
const mapDispathToProps = (dispatch) => ({
    onIncrement: () => dispatch(action.increment()),
    onDecrement: () => dispatch(action.decrement()),
    //onSetColor:(color) => dispatch(action.set_color(color))
    onSetColor:() => {
        const color = getRandomColor();
        dispatch(action.set_color(color))
    }
});

export function getRandomColor(){
    const color = ['#495057','#f03e3e','#d6336c','#ae3ec9','#7048e8','#4263eb','#1c7cd6','#1098ad','#0ca678','#37b24d','#74b816','#f59f00','#f76707']
    const random = Math.floor(Math.random()*13);
    return color[random];
};

export default connect(mapStateToProps, mapDispathToProps)(Counter) 