import React from 'react';
import {useState} from 'react'

function comments() {
  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <input placeholder="Comments" type="text" />
      <button><a href='/#/Review'>Submit</a></button>
    </div>
  );
}

export default comments;
