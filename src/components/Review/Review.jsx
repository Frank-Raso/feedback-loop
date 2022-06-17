import React from 'react';
import { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'


function Review() {
  const feel = useSelector (store=> store.feelReducer)
  const under = useSelector (store=> store.understandReducer)
  const supp = useSelector (store=> store.supportReducer)
  const comm = useSelector (store=> store.comReducer)
  return (
    <div>
      <h1>Review your feedback</h1>
      <p>Feeling:{feel}</p>
      <p>Understanding:{under}</p>
      <p>Support:{supp}</p>
      <p>Comments:{comm}</p>


      <button><a href='/#/Success'>Thanks for leaving feedback click here to submit</a></button>
    </div>
  );
}

export default Review;
