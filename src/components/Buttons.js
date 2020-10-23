//**for 카운터 기능 확장, 04 버튼(onCreate, onRemove) 2개를 내장하고 있는 컴포넌트 생성*/

import React from 'react';
//import PropTypes from '../actions/ActionTypes';  
//아직 헷갈리는 중(이건 액션선언할때, 아랜 유효성체크, 초기값설정용 )
//새로 만들어지는 DOM에 들어가는 요소들을 컨트롤? 상태관리?하는 변수 또는 함수들에 대한 선언, 유효성관리등 
import PropTypes from 'prop-types'; //counter 컴포넌트에서도 참조하고 있다 
import './Buttons.css';

const Buttons = ({onCreate, onRemove}) => {
    return(
        <div className="Buttons">
            {/* <div className="btn add" onClick={this.onCreate}> 생성</div> 
            <div className="btn remove" onClick={this.onRemove}> 삭제</div> 
            //  -> props가 들어오는 거니까 그대로 사용!
                -> this.onRemove는 어디서 썼더라? -> basic/ref,multi event에서 썼었네, 그런데 이대는 내부 함수를 호출햤었네            */}
            <div className="btn add" onClick={onCreate}> 생성</div>
            <div className="btn remove" onClick={onRemove}> 삭제</div>
        </div>
    )
}


Buttons.prototype={
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
}

Buttons.defaultProps={
    onCreate: console.warn("onCreate not define"),
    onRemove: console.warn("onRemove not define")
}

export default Buttons;