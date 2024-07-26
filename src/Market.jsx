import "./index.css"
export default function Market(){
    return(
        <div>
            <h1 align="center" className="Market-Heading">Market</h1>
            <div className="Market">
            <div className="Market-Divs">
                <div className="Market-Row1">
                <img className="Market-Logo" src="src/assets/Nasdaq-logo.png"></img>
                <h2>Nasdaq 100</h2>
                <br></br>
                </div>
                <div className="Market-Value">
                    <h2 className="Market-Num">19,754.43</h2>
                    <h2>USD</h2>
                </div>
                <p align="center" className="Percentage-Loss">-0.35%</p>
                <img src="src/assets/nasdaq.png"></img>
                <p align="center">1 Day</p>
            </div>
            <div className="Market-Divs">
                <div className="Market-Row1">
                <img className="Market-Logo" src="src/assets/FTSE-logo.jpg"></img>
                <h2>FTSE 100</h2>
                <br></br>
                </div>
                <div className="Market-Value">
                    <h2 className="Market-Num">81,332.72</h2>
                    <h2>GBP</h2>
                </div>
                <p align="center" className="Percentage-Gain">+1.21%</p>
                <img src="src/assets/FTSE.png"></img>
                <p align="center">1 Day</p>
            </div>
            <div className="Market-Divs">
                <div className="Market-Row1">
                <img className="Market-Logo" src="src/assets/bse-sensex-logo.png"></img>
                <h2>BSE</h2>
                <br></br>
                </div>
                <div className="Market-Value">
                    <h2 className="Market-Num">81,332.72</h2>
                    <h2>INR</h2>
                </div>
                <p align="center" className="Percentage-Gain">+1.62%</p>
                <img src="src/assets/DAX.png"></img>
                <p align="center">1 Day</p>
            </div>
            </div>
        </div>
    )
}