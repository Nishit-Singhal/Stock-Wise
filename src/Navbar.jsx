import "./index.css"
import Watchlist from "./Watchlist.jsx"
import Market from "./Market.jsx"
import Sensex from "./Sensex.jsx"
export default function Navbar(){
    return(
        <div className="Navbar">
            <img className="Profile-Image" src="src/assets/profile-white-icon.png"></img>
            <div>
                <input className="Searchbar" type="text" placeholder="Search"></input>
            </div>
            <Sensex/>
            <Market/>
            <Watchlist/>    
            
        </div>
    )
}