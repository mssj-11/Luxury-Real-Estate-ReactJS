import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Villas from './components/Villa/Villas';
import SingleVilla from './components/Villa/SingleVilla';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms' element={<TermsAndConditions/>}/>
          <Route path='/villas' element={<Villas/>}/>
          <Route path='/villa/:id' element={<SingleVilla/>}/>

          {/* Ruta para redirigir a Home en caso de rutas no existentes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
