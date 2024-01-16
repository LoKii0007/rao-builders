import React from 'react'
import Login from '../auth/login'
import "../css/loginscreen.css"
import Signup from '../auth/signup'

const LoginScreen = () => {
  const authToken = localStorage.getItem("token")

  return (
    <div className='d-flex flex-column logscreen align-items-center justify-content-center'>
      <div className="bg-logo pt-5 d-flex align-items-center justify-content-center">
        <img src="/logo.png" alt="" />
      </div>
      <div className="login p-5">
        <div className="screen ">
          <Login />
          {/* <Signup/> */}
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
