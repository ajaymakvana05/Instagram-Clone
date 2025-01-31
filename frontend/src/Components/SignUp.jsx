import { useState } from 'react'
import logo from '../images/logo.png'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../style/signUp.css'

export default function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const postData = async () => {


    if(!emailRegex.test(email)){
      toast.error("Email is not valid !")
      
    }

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          username: userName,
          password: password
        })
      })

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || 'Something went wrong!');
        return;
      }

      const data = await response.json();
      console.log(data);

      setName('');
      setEmail('');
      setuserName('');
      setPassword('');

      toast.success('Signup successful!');
      navigate("/signin")

    } catch (error) {
      console.error('Error during fetch:', error);
      toast.error(error);
    }

  }


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
              <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder='Enter Your Email ' />
            </div>
            <div>
              <input type="text" name='name' id='name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' />
            </div>
            <div>
              <input type="text" name='username' id='username' value={userName} onChange={(e) => { setuserName(e.target.value) }} placeholder='Enter Your Username' />
            </div>
            <div>
              <input type="password" name='password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' />
            </div>
            <p className='Loginpara' style={{ fontSize: "12px", margin: "3px 0px" }}> By Signing up, You agree to out Terms <br /> Privacy policy and cookies Policy </p>
            <input type="submit" id='submit-btn' value="Sign Up" onClick={() => { postData() }} />
          </div>
        </div>

        <div className="form2">
          Already have an account? <a href="/signin" style={{ color: "#0095f6" }}>Sign In</a>
        </div>
      </div>
    </div>

  )
}
