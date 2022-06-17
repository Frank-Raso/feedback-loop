import React from 'react';
import {useState} from 'react'
import {useDispatch} from 'react-redux'





function Support() {

  const[supportFeed, setSupportFeed] = useState('');
  const dispatch = useDispatch();

  const SupportIn = ()=>{
    console.log('in SupportIn:')
    setSupportFeed(event.target.value)
  }

  const setSupport = ()=>{
    dispatch({type:'SET_SUPPORT', payload:supportFeed})
  }




  return (
    <div>
      <h1>How well are you being supported?</h1>
      <input placeholder="Support" type="text" onChange={SupportIn} />
      <button onClick={setSupport}><a href='/#/Comments'>Submit</a></button>
    </div>
  );
}

export default Support;
