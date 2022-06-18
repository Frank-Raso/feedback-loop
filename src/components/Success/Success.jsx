import React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Success() {
    const history = useHistory();

    return (
        <div>
            <h1>Success! Your feedback has been submitted.</h1>
            <p>You may now leave this page or click below to add new feedback!</p>


            <button><a href='/' exact> Leave additional Feedback</a></button>

        </div>
    );
}

export default Success;