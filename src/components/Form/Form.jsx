import React from 'react'

const Form = (props) => {
  return (
    props.data.map((field) => {
        
        return <>
        
        <div>
            <input key={field.isMandatory} type={field.inputType} placeholder={field.title} name={field.title}/>

        </div>
        </> 
    })
  )
}

export default Form