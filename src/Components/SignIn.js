import React, { Component } from 'react'
import FormInput from './FormInput'
import './SignIn.scss'
import CustomButton from './CustomButton'
import {auth, signInWithGoogle} from './firebase.utils'
// import {signInWithCredential} from './firebase.utils'
//  import {signInWithFacebook} from './firebase.utils'

 class SignIn extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email: '',
              password: ''
         }
     }

     handleSubmit = async event =>{
         event.preventDefault();
         const {email, password} = this.state;

         try{
             await auth.signInWithEmailAndPassword(email,password);

             this.setState({
                email: '',
                password: ''
   
            })
         }
         catch(error) {
             console.log(error)
         }
         
     }

     handleChange = (event) => {
        const {value,name} = event.target;

        this.setState({
            [name]: value
        })
     }
     
    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange = {this.handleChange} label='email'/>
                  
                    <FormInput name='password' type='password' value={this.state.email} handleChange = {this.handleChange} label='password' />
                <div className='buttons'>
                <CustomButton type='submit'>Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>   
                </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn


                  
        {/* { <CustomButton onClick={signInWithCredential}>Sign in with GitHub </CustomButton> } */}
        {/* <CustomButton onClick={signInWithFacebook}>Sign in with Facebook </CustomButton> */}

