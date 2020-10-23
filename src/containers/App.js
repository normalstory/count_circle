import React, {Component} from 'react';

//**for 카운터 기능 확장, 07 카운터 목록에 대한 컨테이너 컴포넌트 반영 */
import CounterListContainer from '../containers/CounterListContainer';
import Buttons from '../components/Buttons'; //컨테이터를 제어하는 버튼 추가 
import getRandomColor from '../libs/getCounterColor';

//리덕스연결함수와 호출을 위한 개별 액션을 사용하기위한 경로 import
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component{
    render(){
        const {onCreate, onRemove} = this.props;

        return(
            <div className='App'>
                <Buttons onCreate={onCreate} onRemove={onRemove}></Buttons>
                <CounterListContainer></CounterListContainer>
            </div>
        )
    }
};

const mapToDispatch = (dispatch) =>({
    onCreate : () => dispatch(actions.create(getRandomColor())),
    onRemove : () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);