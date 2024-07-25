import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Layouts/Home.jsx'
import Profile from './Profile-Page.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
