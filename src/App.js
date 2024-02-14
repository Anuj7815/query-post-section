import React, { useEffect } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Action/User'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Nav/Navbar'
import Account from './Components/Account/Account'
import Allusers from './Components/AllUsers/Allusers'
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
       dispatch(loadUser());
  }, [dispatch])
  
  const {isAuthenticated} = useSelector((state)=>state.user);
  return (
    <div>
      {
         <Navbar/>
      }
     
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/users' element={<Allusers/>}/>
          <Route path='/profile' element={<Account />} />
          <Route path='/about' element={<About/>}/>
          
        </Routes>
      </Router>
      <Footer/>

    </div>
  )
}

export default App