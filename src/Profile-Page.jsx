import "./Profile-Page.css"
import Portfolio from "./Portfolio.jsx"
import ProfileNav from "./Profile-Nav.jsx"
import StockPicks from "./Stock-Picks.jsx"
import Market from "./Market-Analysis.jsx"
import Navbar from "./Navbar.jsx"
export default function Profile() {
    return (
        <div>
            <Navbar></Navbar>
            <ProfileNav />
            <Portfolio />
            <StockPicks/>
            <Market/>
        </div>
    )
}

