import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Layouts/Home.jsx'
import Profile from './Profile-Page.jsx'
import Watchlist from "./Watchlist.jsx"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path="/watchlist" element={<Watchlist/>}/>
    </Routes>
  )
}

export default App
