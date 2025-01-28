import React from 'react'
import logo from '../images/logo.png'
import './signin.css'

export default function SignIn() {
  return (
    <div>
      <div className='signIn-Form'>
        <div className='signIn'>
          <div className="form-container">
            <div className="form">
              <img className='signIn-logo' src={logo} alt="" />
              <div>
                <input type="email" name='email' id='email' placeholder='Enter Your Email ' />
              </div>
              <div>
                <input type="password" name='password' id='password' placeholder='Enter Your Password' />
              </div>
              <input type="submit" id='submit-btn' value="Sign In" />
            </div>
          </div>

          <div className="form2">
            Don't have an account? <a href="/signup" style={{ color: "#0095f6" }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
