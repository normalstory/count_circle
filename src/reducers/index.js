/*for redux 5 고도화 2)용도별 리듀서를 index에서 합치기 */
import color from './color';
import number from './number';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    colorData:color
});

export default reducers;


// 추가된 -> numberData, colorData에 대한 내용을 CounterContainer 코드에 반영  