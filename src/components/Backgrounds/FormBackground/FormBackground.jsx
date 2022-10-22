import React from 'react'
import './FormBackground.css'

const FormBackground = (props) => {
  return (
    <div className='form-backfround-layout'>
        <h4>{props.data.title}</h4>
        <img alt="" src={props.data.imageUrl}></img>
        <div style={{backgroundColor:`${props.data.squareColor}`}}></div>
    </div>
  )
}

export default FormBackground