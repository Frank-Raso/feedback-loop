import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>

      <HashRouter>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Feeling">
          <Feeling />
        </Route>

        <Route path="/Understanding">
          <Understanding />
        </Route>

        <Route path="/Support">
          <Support />
        </Route>

        <Route path="/Comments">
          <Comments />
        </Route>

        <Route path="/Review">
          <Review />
        </Route>

      </HashRouter>

    </div>
  );
}

export default App;
