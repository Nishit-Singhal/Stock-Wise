import "./index.css"
import Watchlist from "./Watchlist.jsx"
import { Link } from "react-router-dom"
import Market from "./Market.jsx"
import Sensex from "./Sensex.jsx"
export default function Navbar() {
    return (
        <div className="Navbar">
            <Link to={'/profile'}><img className="Profile-Image" src="src/assets/profile-white-icon.png"></img></Link>
            <div>
                <Link to={'/search'}><input className="Searchbar" type="text" placeholder="Search your stock symbol here"></input></Link>
            </div>
            <Sensex />
            <Market />
            <Watchlist />
        </div>
    )
}