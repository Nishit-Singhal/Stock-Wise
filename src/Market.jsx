import "./index.css"
export default function Market(){
    return(
        <div>
            <h1 className="Market-Heading">Market</h1>
            <div className="Market">
            <div className="Market-Div">
                <img className="Stock-logo" src="src/assets/Nasdaq-logo.png"></img>
                <h1 className="Market-Div-Heading">Nasdaq 100 -</h1>
                <div className="Market-Value"><p className="Market-Num">19,754.43</p><p className="Market-Currency">USD</p></div>
                <p className="Percentage-Negative">-0.35%</p>
                <img className="Graph" src="src/assets/nasdaq.png"></img>
                <p align="center" className="Days">1 day</p>
            </div>
            <div className="Market-Div">
                <img className="Stock-logo" src="src/assets/FTSE-logo.jpg"></img>
                <h1 className="Market-Div-Heading">FTSE 100</h1>
                <div className="Market-Value"><p className="Market-Num">8,153.81</p><p className="Market-Currency">GBP</p></div>
                <p className="Percentage-Negative">-0.17%</p>
                <img height="65px" className="Graph" src="src/assets/FTSE.png"></img>
                <p align="center" className="Days">1 day</p>
            </div>
            <div className="Market-Div">
                <img className="Stock-logo" src="src/assets/DAX-logo.png"></img>
                <h1 className="Market-Div-Heading">DAX</h1>
                <div className="Market-Value"><p className="Market-Num">18,433.20</p><p className="Market-Currency">EUR</p></div>
                <p className="Percentage-Negative">-0.67%</p>
                <img height="65px" className="Graph" src="src/assets/DAX.png"></img>
                <p align="center" className="Days">1 day</p>
            </div>
            <div className="Market-Div">
                <img className="Stock-logo" src="src/assets/Nasdaq-logo.png"></img>
                <h1 className="Market-Div-Heading">Nasdaq 100 -</h1>
                <div className="Market-Value"><p className="Market-Num">19,754.43</p><p className="Market-Currency">USD</p></div>
                <p className="Percentage-Negative">-0.35%</p>
                <img className="Graph" src="src/assets/nasdaq.png"></img>
                <p align="center" className="Days">1 day</p>
            </div>
            </div>
        </div>
    )
}