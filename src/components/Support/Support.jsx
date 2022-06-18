import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';





function Support() {

  const [supportFeed, setSupportFeed] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const SupportIn = () => {
    console.log('in SupportIn:')
    setSupportFeed(event.target.value)
  }

  const setSupport = () => {
    if (supportFeed == '') {
      alert('Please add feedback before continuing')
    }
    else {
      dispatch({ type: 'SET_SUPPORT', payload: supportFeed })
      history.push('/Comments')
    }
  }

  const Back = () => {
    history.push('/Understanding')
  }

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <button onClick={Back}>Back</button>

      <input placeholder="Support" type="number" onChange={SupportIn} />
      <button onClick={setSupport}>Next</button>
      {/* <button onClick={setSupport} ><a href='/#/Comments'>Submit</a></button> */}

    </div>
  );
}

export default Support;
