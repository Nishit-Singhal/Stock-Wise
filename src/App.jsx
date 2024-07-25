import { useState } from 'react'
import './index.css'
import Navbar from "./Navbar.jsx"
import Market from "./Market.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App
