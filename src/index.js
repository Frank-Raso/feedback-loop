import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import{ createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const feedbackReducer = ( state='', action ) =>{
    console.log( 'in feedbackReducer:', action );
    if( action.type === 'SET_FEED' ){
        state = action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers(
        {
            feedbackReducer
        }
    ) // end combine
) // end store



ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
