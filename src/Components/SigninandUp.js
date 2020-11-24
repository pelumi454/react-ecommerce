import React from 'react'
import './SigninandUp.scss'
import SignIn from './SignIn'
import SignUp from './SignUp'

const SigninandUp= () => {
    return (
        <div className='sign-in-and-sign-up'>
           <SignIn></SignIn>
           <SignUp></SignUp>
        </div>
    )
}

export default SigninandUp
