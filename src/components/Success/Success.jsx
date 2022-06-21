import React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Success() {
    const history = useHistory();

    const dispatch = useDispatch();

    const RESET = () => {
        dispatch({ type: 'RESET', payload: '' })
        // history.push("/")

    }

    return (
        <div>
            <h1>Success! Your feedback has been submitted.</h1>
            <p>You may now leave this page or click below to add new feedback!</p>

            {/* This way will reset the values and use the history.push("/") but keeps the users log history in the console, 
            I did not think thats what the assignment called for so i added an <a href> tag 
            that would redirect and refresh the page. The RESET dispatch seems redundant when combined with 
            the <a href> tag as both would clear the values. But as I was unclear of the specific instructions, did both.  If console
            info does not matter then I would trash the <a href='/'> tag and uncomment the history.push("/") */}
            
            {/* <button onClick={RESET} >Leave additional feedback</button>  */}

            <button onClick={RESET}><a href='/'> Leave additional Feedback</a></button>

        </div>
    );
}

export default Success;