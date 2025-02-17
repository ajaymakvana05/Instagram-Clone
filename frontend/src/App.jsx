import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'

function App() {

  return (

    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/Signup" element={<SignUp />} ></Route>
          <Route path="/Signin" element={<SignIn />} ></Route>
          <Route path="/Profile" element={<Profile />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
