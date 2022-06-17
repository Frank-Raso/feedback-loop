import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'


function Understanding() {






  const [underFeed, setUnderFeed] = useState('');
  const dispatch = useDispatch();

  const UnderstandingIn = () => {
    console.log('in UnderstandingIn:')
    setUnderFeed(event.target.value)
  }

  const setUnderstanding = () => {
    dispatch({ type: 'SET_UNDER', payload: underFeed })
  }




  return (
    <div>
      <h1>How well are you understanding the content?</h1>

      <input placeholder="Understanding" type="text" onChange={UnderstandingIn} />
      <button onClick={setUnderstanding}><a href='/#/Support'>Submit</a></button>

    </div>
  );
}

export default Understanding;
