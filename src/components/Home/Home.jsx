import React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';



function Home() {
  const history = useHistory();

  const next = () => {
    history.push('/Feeling')
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Please take a moment and take our feedback poll</h1>

      <button onClick={next} >Next</button>

      {/* <button><a href='/#/Feeling'>Leave Feedback</a></button> */}
    </div>
  );
}

export default Home;