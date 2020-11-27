import React, { Component } from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import {auth, createUserProfileDocument} from './firebase.utils'
import './SignUp.scss'

class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dispalyName: '',
             email: '',
             password: '',
             confirmPassword: ''
        }
    }

    handleSubmit = async event  => {
        event.preventDefault();
        const {dispalyName,email,password,confirmPassword} = this.state

        if (password != confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try{
            const user = await auth.createUserWithEmailAndPassword(email,password);
          await   createUserProfileDocument(user, {dispalyName})

          this.setState({
            dispalyName: '',
            email: '',
            password: '',
            confirmPassword: ''
       });
        }

        catch(error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const {value,name} = event.target;

        this.setState({
            [name]: value
        })
     }
    
    render() {
        const {dispalyName,email,password,confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h1 className='title'>I dont have an account</h1>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={dispalyName} onChange = {this.handleChange} label='displayName'/>

                    <FormInput name='email' type='email' value={email} onChange = {this.handleChange} label='email'/>

                    <FormInput name='password' type='password' value={password} onChange = {this.handleChange} label='password'/>

                    <FormInput name='confirmPassword' type='password' value={confirmPassword} onChange = {this.handleChange} label='confirm password'/>
                <CustomButton type='submit'>Sign Up</CustomButton>  
                </form>
            </div>
        )
    }
}

export default SignUp
