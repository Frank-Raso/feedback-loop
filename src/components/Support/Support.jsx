import React from 'react';
import {useState} from 'react'

function Support() {
  return (
    <div>
      <h1>How well are you being supported?</h1>
      <input placeholder="Support" type="number" />
      <button><a href='/#/Comments'>Submit</a></button>
    </div>
  );
}

export default Support;
