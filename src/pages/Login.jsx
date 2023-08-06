import React from 'react'
import './style.css'

function Login() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="title" style={{marginTop: '10px'}}>Login to your Account</div>
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
          <button className="signup-btn" style={{marginBottom: '15px'}}>Login</button>
          <div className="login-link" style={{fontSize: '12px'}}>
            New to MyApp? <a href="index.html">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login