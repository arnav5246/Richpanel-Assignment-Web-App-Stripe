import React from 'react'
import './style.css'

function Signup() {
  return (
    <>
      <div>
       
        <div className="container">
          <div className="title" style={{marginTop: '10px'}}>Create Account</div>
          <div className="input-group">
            <label htmlFor="username" style={{marginBottom: '5px'}}>Name</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label htmlFor="email" style={{marginBottom: '5px'}}>Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password" style={{marginBottom: '5px'}}>Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" style={{marginLeft: '0px'}} />
            <label htmlFor="remember" style={{fontWeight: 500}}>Remember me</label>
          </div>
          <button className="signup-btn" style={{marginBottom: '15px'}}>Sign Up</button>
          <div className="login-link" style={{fontSize: '12px'}}>
            Already have an account? <a href="login.html">Login</a>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Signup