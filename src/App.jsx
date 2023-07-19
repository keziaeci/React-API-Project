import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/ToDo/Home'
import { Chapters } from './Pages/Bible/Chapters'
import Chapter from './Pages/Bible/Chapter'
import Brand from './Pages/Phone/Brand'
import { Phones } from './Pages/Phone/Phones'
import { PhoneDetail } from './Pages/Phone/PhoneDetail'
import { Latest } from './Pages/Phone/Latest'
import { Interest } from './Pages/Phone/Interest'
import { Fans } from './Pages/Phone/Fans'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Brand/>}/>
        {/* <Route path='/phone' element={<Brand/>}/> */}
        <Route path='/phone/:slug/:page' element={<Phones/>}/>
        <Route path='/phone/:slug/detail' element={<PhoneDetail/>}/>
        <Route path='/phone/latest' element={<Latest/>}/>
        <Route path='/phone/interest' element={<Interest/>}/>
        <Route path='/phone/fans' element={<Fans/>}/>

        <Route path='/kitab/:id' element={<Chapters/>}/>
        <Route path='/bab/:id/isi' element={<Chapter/>}/>

        <Route path='/todo' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
