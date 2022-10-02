import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import App from './common/App';
// import Controller from './screens/Controller';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import {store} from './common/store';
import {dataSlice} from './common/dataSlice';


// function reducer(state = { login: true , loginNoHide : true, logoutShow : false, bookShow : false }, action) {
//     switch (action.type) {
//       case "LOGIN": {
//         return {
//           login: action.payload
//         };
//       }
//       case "LOGINNOHIDE": {
//         console.log("in reducer :loginhide");
//         return {
//           loginNoHide: action.payload
//         };
//       }
//       case "LOGOUTSHOW": {
//         return {
//           logoutShow: action.payload
//         };
//       }
//       case "BOOKSHOW": {
//         return {
//           bookShow: action.payload
//         };
//       }

//       default:
//         return state;
//     }
//   }

  const store = configureStore({reducer: {dataSliceReducer : dataSlice.reducer} });

  
ReactDOM.render( 
    <Provider store = {store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

export default store;