import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/crwn-clothing' component={HomePage} />
      <Route path='/crwn-clothing/shop' component={ShopPage} />   
      </Switch>
    </div>
  );
}

export default App;
