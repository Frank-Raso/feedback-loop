import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';



function Feeling() {

  const [feelFeed, setFeelFeed] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const FeelingIn = () => {
    console.log('in FeelingIn:')
    setFeelFeed(event.target.value)
  }

  const setFeeling = () => {
    if (feelFeed == '') {
      alert('Please add feedback before continuing')
    }
    else {
      dispatch({ type: 'SET_FEEL', payload: feelFeed })
      history.push('/Understanding')
    }
  }
  const Back = () => {
    history.push('/')
  }


  return (
    <div>
      <h1>How are you feeling today?</h1>
      <button onClick={Back}>Back</button>
      <input placeholder="Feeling" type="number" onChange={FeelingIn} />
      <button onClick={setFeeling}>Next</button>
      {/* <button onClick={setFeeling} ><a href='/#/Understanding'>Submit</a></button> */}
    </div>
  );
}
export default Feeling;
