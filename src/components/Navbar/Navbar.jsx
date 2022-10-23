import NavButton from '../Button/Button'
import React from 'react'
import {Link} from 'react-router-dom'
import { NavbarLinks } from '../../data/app-data'
import './Navbar.css'

const Navbar = () => {
    
  return (
    <nav>
       <Link to='/'> <img className='company-logo' src='/images/company-logo.png' alt='company-logo'></img></Link>
        {NavbarLinks.map((navElement) => {
            return  <Link key={navElement.toLocation} to={navElement.toLocation}><NavButton data={navElement}/></Link>
       

        })}
       
    </nav>
  )
}

export default Navbar