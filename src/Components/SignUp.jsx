import React from 'react'
import logo from '../images/logo.png'
import '../style/signUp.css'

export default function SignUp() {
  return (
    <div className='signUp-Form'>
      <div className='signUp'>
        <div className="form-container">
          <div className="form">
            <img className='signUp-logo' src={logo} alt="" />
            <p className='LoginPara'>
              Sign Up to See Photos and Videos <br /> from Your Friends.
            </p>
            <div>
              <input type="email" name='email' id='email' placeholder='Enter Your Email ' />
            </div>
            <div>
              <input type="text" name='name' id='name' placeholder='Enter Your Name' />
            </div>
            <div>
              <input type="text" name='username' id='username' placeholder='Enter Your Username' />
            </div>
            <div>
              <input type="password" name='password' id='password' placeholder='Enter Your Password' />
            </div>
            <p className='Loginpara' style={{ fontSize: "12px", margin: "3px 0px" }}> By Signing up, You agree to out Terms <br /> Privacy policy and cookies Policy </p>
            <input type="submit" id='submit-btn' value="Sign Up" />
          </div>
        </div>

        <div className="form2">
          Already have an account? <a href="/signin" style={{ color: "#0095f6" }}>Sign In</a>
        </div>
      </div>
    </div>

  )
}
