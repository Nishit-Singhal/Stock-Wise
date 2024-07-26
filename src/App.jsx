import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Layouts/Home.jsx'
import Profile from './Profile-Page.jsx'
import Component from './Layouts/Search.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/search' element={<Component />} />
    </Routes>
  )
}

export default App
