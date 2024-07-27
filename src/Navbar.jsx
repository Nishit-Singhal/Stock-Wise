import "./index.css"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div align="center">
            <div>
                <div className="Name">
                    <Link to={'/'}><img className="Logo" src="src/assets/Stock-Wise-Logo.png"></img></Link>
                    <Link to={'/'}><h1 className="App-Name">Stock Wise</h1></Link>
                </div>
                <div className="Navbar">
                    <Link to={'/'}><h2 className="Home-Heading">Home</h2></Link>
                    <Link to={'/watchlist'}><h2 className="Watchlist-Heading">Watchlist</h2></Link>
                    <Link to={'/profile'}><h2 className="Profile-Heading">Profile</h2></Link>
                </div>
            </div>
            <div className="Searchbar_Profile_logo">
                <Link to={'/profile'}><img className="Profile-Image" src="src/assets/profile-white-icon.png"></img></Link>
                <div>
                    <Link to={'/search'}>
                        <input className="Searchbar border-[1px] border-black" type="text" placeholder="Search" />
                    </Link>
                </div>
            </div>
        </div>
    )
}