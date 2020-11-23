import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage'
import ShopPage from './Components/ShopPage'
import HeaderComp from './Components/HeaderComp'
import SigninandUp from './Components/SigninandUp'
import {auth} from './Components/firebase.utils'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null,
    }
  }

  unsuscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  
  render() { 
    return ( 
      <div>
      <HeaderComp currentUser={this.state.currentUser}/>
      <switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SigninandUp}/>

      </switch>
     
    </div>
     );
  }
}
 
export default App;

