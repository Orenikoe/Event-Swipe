import { Button } from '../Button/Button'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link><Button/></Link>
        <Link><Button/></Link>
        <Link><Button/></Link>
       
    </nav>
  )
}

export default Navbar