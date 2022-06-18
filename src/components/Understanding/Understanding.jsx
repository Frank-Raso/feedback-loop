import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Understanding() {





  const [underFeed, setUnderFeed] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const UnderstandingIn = () => {
    console.log('in UnderstandingIn:')
    setUnderFeed(event.target.value)
  }

  const setUnderstanding = () => {
    if (underFeed == '') {
      alert('Please add feedback before continuing')
    }
    else {
      dispatch({ type: 'SET_UNDER', payload: underFeed })
      history.push('/Support')

    }
  }

  const Back = () => {
    history.push('/Feeling')
  }

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <button onClick={Back}>Back</button>

      <input placeholder="Understanding" type="number" onChange={UnderstandingIn} />
      <button onClick={setUnderstanding}>Next</button>
      {/* <button onClick={setUnderstanding} ><a href='/#/Support'>Submit</a></button> */}


    </div>
  );
}

export default Understanding;
