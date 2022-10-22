import Button from '../Button/Button'
import React from 'react'
import {Link} from 'react-router-dom'
import { NavbarLinks } from '../../data/app-data'

const Navbar = () => {
  return (
    <nav>
        {NavbarLinks.map((navElement) => {
            return  <Link to={navElement.toLocation}><Button data={navElement}/></Link>
       

        })}
       
    </nav>
  )
}

export default Navbar