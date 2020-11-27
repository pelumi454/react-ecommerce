import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import HomePage from './Components/HomePage'
import ShopPage from './Components/ShopPage'
import HeaderComp from './Components/HeaderComp'
import SigninandUp from './Components/SigninandUp'
import {auth, createUserProfileDocument} from './Components/firebase.utils'
import {setCurrentUser} from './Components/redux/user.actions.'


class App extends Component {
 
  unsuscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         setCurrentUser ({
             id: snapShot.id,
             ...snapShot.data()
           })
        }) 
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  
  render() { 
    return ( 
      <div>
      <HeaderComp/>
      <switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route exact path='/signin' render= {() => this.props.currentUser ? (<Redirect to ='/' />): (<SigninandUp/>)}/>

      </switch>
     
    </div>
     );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
 
export default connect(mapStateToProps,mapDispatchToProps)(App);

