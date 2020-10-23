//**for 카운터 기능 확장, 06 여러개의 카운터 목록에 대응하기 위한 index관련 코드 추가*/

import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({index, number, color, onIncrement, onDecrement, onSetColor}) => { //({여기에 props!!})
    return(
        <div 
            className='Counter' 
            //onClick={onIncrement(index)} //아.. 인덱스 넣을때 같이 바꿨어야했던 부분 
            onClick={() => onIncrement(index)}  
            onContextMenu={(e)=>{
                e.preventDefault();
                onDecrement(index);
            }}
            onDoubleClick={() => onSetColor(index)} //아.. 인덱스 넣을때 같이 바꿨어야했던 부분 
            style={{backgroundColor:color
            }}>
            {number}
        </div>
    );
};

Counter.propTypes = {
    index:PropTypes.number,
    number:PropTypes.number,
    color:PropTypes.string,
    onIncrement:PropTypes.func,
    onDecrement:PropTypes.func,
    onSetColor:PropTypes.func
};

Counter.defaultProps={
    index:0,
    number:0,
    color:'black',
    onIncrement:()=>console.warn('onIncrement not defined'),
    onDecrement:()=>console.warn('onDecrement not defined'),
    onSetColor:()=>console.warn('onSetColor not defined'),
};

export default Counter;