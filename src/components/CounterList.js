//**for 카운터 기능 확장, 05 여러개의 카운터 목록들을 노출시킬 컴포넌트 생성*/

import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import './CounterList.css';

//const CounterList =(counters, onIncrement, onDecrement, onSetColor) => { //props 나열
const CounterList =({counters, onIncrement, onDecrement, onSetColor}) => {
    //리스트생성 
    const counterList = counters.map(
        (counter, i) => (
          <Counter
            key={i}
            index={i}
            {...counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}/>
          )
        );
    //리스트 출력 
    return(
        <div className="CounterList">
            {counterList}
        </div>
    )
}

//검증
CounterList.propTypes={
    // counter: PropTypes.array, 
    //  틀2  counter:
    counters: 
            PropTypes.arrayOf( //덩어리니까... arrayOf
                PropTypes.shape({ //개별 상세 내용은 shape에.. 
                    color:PropTypes.string,
                    number:PropTypes.number
            })),
    onIncrement: PropTypes.func, 
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}
//초기값 
CounterList.defaultProps={
    // counter: {...Counter}, 
    //  틀2  counter:
    // onIncrement: console.log("onIncrement가 정의되지 않았습니다."), 
    // onDecrement: console.log("onDecrement가 정의되지 않았습니다."), 
    // onSetColor: console.log("onSetColor가 정의되지 않았습니다.")  //틀~ 
    counters:[] //헐.. 그러네 
}

export default CounterList;