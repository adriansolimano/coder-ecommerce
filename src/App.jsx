import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/containers/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ItemDetailContainer} />
          <Route path="/item/:id" element={ItemDetailContainer} />
          <Route path="/category/:categoryId" element={ItemDetailContainer} />
          <Route path="/cart" element={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
