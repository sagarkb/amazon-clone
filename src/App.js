import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Checkout from './components/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Header />
            <Homepage />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
