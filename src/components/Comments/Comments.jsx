import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';




function comments() {


  const [comFeed, setComFeed] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const comIn = () => {
    console.log('in comIn:')
    setComFeed(event.target.value)
  }

  const setCom = () => {
    dispatch({ type: 'SET_COM', payload: comFeed })
    history.push('/Review')

  }




  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <input placeholder="Comments" type="text" onChange={comIn} />
      <button onClick={setCom} >Submit</button>
      {/* <button onClick={setCom} ><a href='/#/Review'>Submit</a></button> */}
    </div>
  );
}

export default comments;
