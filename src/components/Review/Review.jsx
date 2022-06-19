import React from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Review() {
  const feel = useSelector(store => store.feelReducer)
  const under = useSelector(store => store.understandReducer)
  const supp = useSelector(store => store.supportReducer)
  const com = useSelector(store => store.comReducer)
  const history = useHistory();

  const startOver = () => {
    history.push('/Feeling')

  }

  const Submit = () => {
    console.log('in Submit')

    let feedbackPost = {
      feeling: feel,
      understanding: under,
      support: supp,
      comments: com,
    };
    axios.post('/feedback', feedbackPost).then((response) => {
      console.log(response.data);
      history.push('/Success')

    }).catch((err) => {
      console.log(err);
      alert('err posting fbp');
    })

  }
  return (
    <div>

      <h1>Review your feedback</h1>
      <p>Feeling: {feel}</p>
      <p>Understanding: {under}</p>
      <p>Support: {supp}</p>
      <p>Comments: {com}</p>

      {/* <button><a href='/' exact>Want to start over? Click here.</a></button> */}
      <button onClick={Submit}>Thanks for the feedback. Click here to submit</button>

      <button onClick={startOver} >Want to go back? Click here.</button>
      {/* <button onClick={Submit} ><a href='/#/Success'>Thanks for leaving feedback click here to submit</a></button> */}
    </div>
  );
}

export default Review;
