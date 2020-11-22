import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage'
import ShopPage from './Components/ShopPage'
import HeaderComp from './Components/HeaderComp'
import SigninandUp from './Components/SigninandUp'


function App() {
  return (
    <div>
      <HeaderComp/>
      <switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SigninandUp}/>

      </switch>
     
    </div>
  );
}

export default App;
