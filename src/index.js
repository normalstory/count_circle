import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

/*for redux 3 store */

import { createStore } from 'redux';    // 1) 리덕스 불러오기 
import reducers from './reducers';      // 1) 작성한 리듀서 불러오기
import { Provider } from 'react-redux'; // 3) Provider를 불러와서, 리덕스 스토어를 리액트 컴포넌트에 속성props으로 연동 

// const store = createStore(reducers);    // 2) 리덕스 스토어 생성, 리듀서 연동  
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());    // 리덕스 개발자 툴 연동

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
