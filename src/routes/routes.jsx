import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar';
import { Home } from '../pages/home/Home';
import { Temperature } from '../pages/temperature/Temperature';

export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='container_main'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
