import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="login-coni">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Type your email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="login">Already have an account? <span>Login here</span> </p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
