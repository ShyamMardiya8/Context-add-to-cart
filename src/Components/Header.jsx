import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { BookContext } from '../App'

function Header() {
  const context = useContext(BookContext)
  const cartData = context.state.Cart.length
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow rounded mb-2">
        <div className="container">
        <a href="" className='navbar-brand me-auto'>Shopping</a>
        <Link to='/Products'><i class="fa-solid fa-cart-shopping"></i><span>{cartData}</span></Link>
        </div>
    </nav>
    </>
  )
}

export default Header