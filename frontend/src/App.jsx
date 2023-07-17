import React from 'react'
import {  Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import './App.css'
import About from './components/pages/About';
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
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <ToastContainer/>
    
    </div>
        
    </>
  )
}

export default App
