import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const feelReducer = (state = '', action) => {
    console.log('in feelReducer:', action);
    if (action.type === 'SET_FEEL') {
        state = action.payload;
    }
    return state;
}
const understandReducer = (state = '', action) => {
    console.log('in understandReducer:', action);
    if (action.type === 'SET_UNDER') {
        state = action.payload;
    }
    return state;
}
const supportReducer = (state = '', action) => {
    console.log('in supportReducer:', action);
    if (action.type === 'SET_SUPPORT') {
        state = action.payload;
    }
    return state;
}
const comReducer = (state = '', action) => {
    console.log('in comReducer:', action);
    if (action.type === 'SET_COM') {
        state = action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers(
        {
            feelReducer,
            understandReducer,
            supportReducer,
            comReducer,

        }
    ) // end combine
) // end store



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
