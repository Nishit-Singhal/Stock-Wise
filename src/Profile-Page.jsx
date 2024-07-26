import "./Profile-Page.css"
import Portfolio from "./Portfolio.jsx"
import ProfileNav from "./Profile-Nav.jsx"
import StockPicks from "./Stock-Picks.jsx"
import Market from "./Market-Analysis.jsx"
export default function Profile() {
    return (
        <div>
            <ProfileNav />
            <Portfolio />
            <StockPicks/>
            <Market/>
        </div>
    )
}

