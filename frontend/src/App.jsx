import React from 'react'
import {  Routes, Route } from 'react-router-dom'; 
import './App.css'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Parcel from './components/pages/Parcel';
import Profile from './components/pages/Profile';
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import Header from './components/navbar/Header';

function App() {

  return (
    <>
    <Header/>
    <div>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/parcel' element={<Parcel/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    
    </div>
        
    </>
  )
}

export default App
