import React from 'react'
import Form from '../Form/Form'
import { loginFormFields } from '../../data/app-data'


const Login = () => {
    console.log(loginFormFields);

  return (
    <>
    <h1>Login Page</h1>
    <Form data={loginFormFields} condition={loginFormFields}/>
    </>
   
    
   
    
  )
}

export default Login