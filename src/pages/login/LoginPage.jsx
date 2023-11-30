import React from 'react'
import "./LoginPage.scss"
import login from "../../assets/login.jpeg"
import LoginForm from '../../components/login/signup/LoginForm'
import Navbar from '../../components/navbar/Navbar'

function LoginPage() {
  return (
    <div className='loginpage' style={{marginTop:'0rem', paddingTop:0, display: 'flex'}}>
      <Navbar/>
      <div className='lcontainer'>
      <div className='lbox'>
      <div className='lheader'>
        LOGIN
      </div>
      <LoginForm/>
      </div>
      <div className="limg">
        <img src={login} className="img"/>
      </div>
      </div>
    </div>
  )
}

export default LoginPage