import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../cart/cart.actions'
import {selectCartItems} from '../cart/cart.selectors'
import './cart-dropdown.scss'
import CustomButton from '../CustomButton'

const CartDropdown =({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items '>
            {
                cartItems.length ? 
               (cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem}/>) ) : <span className='empty-message'>Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
