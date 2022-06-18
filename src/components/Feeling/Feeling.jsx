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
    dispatch({ type: 'SET_FEEL', payload: feelFeed })
    history.push('/Understanding')
  }





  return (
    <div>
      <h1>How are you feeling today?</h1>

      <input placeholder="Feeling" type="text" onChange={FeelingIn} />
      <button onClick={setFeeling}>Submit</button>
      {/* <button onClick={setFeeling} ><a href='/#/Understanding'>Submit</a></button> */}
    </div>
  );
}
export default Feeling;
