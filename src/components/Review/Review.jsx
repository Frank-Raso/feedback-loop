import React from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios';


function Review() {
  const feel = useSelector(store => store.feelReducer)
  const under = useSelector(store => store.understandReducer)
  const supp = useSelector(store => store.supportReducer)
  const com = useSelector(store => store.comReducer)

  
    const gamma = () => {
      console.log('in gamma')
      let feedbackPost = {
        feeling: feel,
        understanding: under,
        support: supp,
        comments:com,
      };
      axios.post('/feedback', feedbackPost).then((response) => {
        console.log(response.data);
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



      <button onClick={gamma} ><a href='/#/Success'>Thanks for leaving feedback click here to submit</a></button>
    </div>
  );
}

export default Review;
