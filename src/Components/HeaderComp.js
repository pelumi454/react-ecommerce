import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../Components/assets/crown.svg'
import './HeaderComp.scss'

const HeaderComp = () => {
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
        </div>
        </div>
    )
}

export default HeaderComp