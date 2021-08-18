import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
import {auth,provider} from "./firebase.js"

export function Login() {
   // SignIn Functionality
   const SignIn =() =>{
    auth.signInWithPopup(provider).then(res=>{

    }).catch((error)=>alert(error.message))
 }
  
  return (
    <div className="login">
        <div className="login-container">
          <img src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9naW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="Login photo"/>
          <div className="login-text">
            <h2>Login in Stratcom registratio System </h2>
            </div> 
            <Button onClick={SignIn} > Sign In With Google</Button>
        </div>
    </div>
  )
}

export default Login