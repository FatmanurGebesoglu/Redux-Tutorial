import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import {Provider} from 'react-redux';
import userReducer from './reducer/userReducer';
import productReducer from './reducer/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});

//initial state tanımlamak için

const store = createStore(
  rootReducer, {
  products: [{
    name: 'samsung',
    type: 'TV'
  }],
  user: 'mehmet'
},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

console.log(store.getState());

const updateUserAction = {
  type: 'userUpdated',
  payload: {
    user: 'ahmet'
  }
}
store.dispatch(updateUserAction);

console.log(store.getState());

// const store = createStore(reducer);

// function reducer(state,action){

//   if(action.type==='changeTheState'){
//     return action.payload.newState
//   }
//   return 'state';
// }

// const action = {
//   type:'changeTheState',
//   payload:{
//     newState:'my new state'
//   }
// };

// const action2 = {
//   type:'changeTheState',
//   payload:{
//     newState:'my new state2'
//   }
// };

// store.subscribe(()=> {
//   console.log('store updated',store.getState());
// });

// store.dispatch(action);
// store.dispatch(action2);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App count={4} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
