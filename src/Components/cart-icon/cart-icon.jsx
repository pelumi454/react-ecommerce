import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../cart/cart.selectors'
import {ReactComponent as ShoppingIcon} from '../../Components/assets/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
