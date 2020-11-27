import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../Components/assets/crown.svg'
import {auth} from './firebase.utils'
import CartIcon from './cart-icon/cart-icon'
import CartDropdown from './cart-dropdown/cart-dropdown'
import './HeaderComp.scss'

const HeaderComp = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container'to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
            <Link className='option'to='/shop'>SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser?
               (<div className='option' onClick= {() => auth.signOut()}> 
               SIGN OUT
           </div>) 
                :
                (<Link className='option' to='./signin'>SIGN IN</Link>)
            }
            {/* <Cart currentUser={currentUser}/>  */}
            <CartIcon/>
        </div>
        {
            hidden ? null : 
            <CartDropdown/>
            }
        </div>
    )
} 

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,hidden
})

export default connect(mapStateToProps)(HeaderComp)
 