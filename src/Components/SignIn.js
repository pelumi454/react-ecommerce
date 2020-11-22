import React, { Component } from 'react'
import FormInput from './FormInput'
import './SignIn.scss'
import CustomButton from './CustomButton'

 class SignIn extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email: '',
              password: ''
         }
     }

     handleSubmit =(event) =>{
         event.preventDefault();
         this.setState({
             email: '',
             password: ''

         })
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
                    <FormInput name='email' type='email' value={this.state.email} handleChange = {this.handleChange} required label='email'/>
                  
                    <FormInput name='password' type='password' value={this.state.password} handleChange = {this.handleChange} label='password' required/>
            
                    <CustomButton type='submit'>Sign in </CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignIn
