import React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Success() {
    // const history = useHistory();
    // const startOver = () => {
    //     history.push("/")
    //   }
    const dispatch = useDispatch();

    const RESET = () => {
          dispatch({ type: 'RESET', payload: '' })
        }
      
    return (
        <div>
            <h1>Success! Your feedback has been submitted.</h1>
            <p>You may now leave this page or click below to add new feedback!</p>

            {/* <button onClick={startOver} >Leave additional feedback</button> */}
            <button onClick={RESET}><a href='/'> Leave additional Feedback</a></button>

        </div>
    );
}

export default Success;