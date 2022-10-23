import React from 'react'
import Form from '../Form/Form'
import FormBackground from '../Backgrounds/FormBackground/FormBackground'
import { loginFormFields } from '../../data/app-data'
import { BackgroundPages } from '../../data/app-data'


const Login = () => {

    const [page] = BackgroundPages.filter(page => {
      return page.title === 'Login'
    })
    
   

  return (
    <>
    <FormBackground data={page}>
    </FormBackground>
    <Form data={loginFormFields}/>
    </>
   
    
   
    
  )
}

export default Login