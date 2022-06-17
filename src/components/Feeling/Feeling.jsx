import React from 'react';
import {useState} from 'react'
import {useDispatch} from 'react-redux'



function Feeling() {

const[feedback, setFeed] = useState('');
const dispatch = useDispatch();

  const FeelingIn = ()=>{
    console.log('in FeelingIn:')
    setFeed(event.target.value)
  }

  const setFeeling = ()=>{
    dispatch({type:'SET_FEED', payload:feedback})
  }





  return (
    <div>
      <h1>Feeling</h1>
      <h1>{feedback}</h1>
      <input placeholder="Feeling" type="text" onChange={FeelingIn} />
      <button onClick={setFeeling} ><a href='/#/Understanding'>Submit</a></button>
    </div>
  );
}

export default Feeling;
