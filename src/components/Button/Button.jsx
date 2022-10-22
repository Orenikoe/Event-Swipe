import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className='btn'>{props.data.title}</button>
  )
}

export default Button