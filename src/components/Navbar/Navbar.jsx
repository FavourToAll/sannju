import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/loop1.jpg'
import search from '../../assets/san.jpg'
import Avatar from '../../components/Avatar/Avatar'
//import Button from '../../components/Button/Button'
import './Navbar.css'
const Navbar = () => {
    var User = null
  return (
    <nav className='main-nav'>
      <div className='navbar'>
         <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
         </Link>
         <Link to='/' className='nav-item nav-btn'>About</Link>
         <Link to='/' className='nav-item nav-btn'>Products</Link>
         <Link to='/' className='nav-item nav-btn'>For Teams</Link>
         <form>
            <input type="text" placeholder='Search...' />
            <img src={search} alt="search" width="18"  className='search-icon'/>
         </form>
         { User === null ? 
         <Link to='/Auth' className='nav-item nav-links'>log in</Link>:
             <>
             <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="40%" color="white"><Link to='/User' style={{color:"wite", textDecoration:'none'}} >S </Link></Avatar>
             <button className='nav-item nav-links'>Log Out</button>
             </>
         }
      </div>
    </nav>
  )
}

export default Navbar
