import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App