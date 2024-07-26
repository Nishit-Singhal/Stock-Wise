import "./Profile-Page.css"
export default function Market(){
  return(
    <div>
      <h2 align="center" className="MarketAnalysis-Heading">MARKET ANALYSIS</h2>
      <div className="MarketAnalysis">
        <div className="MarketAnalysis-Divs">
          <h2 className="MarketAnalysis-Name">S&P 500 Index</h2>
          <p className="MarketAnalysis-Short">SPX</p>
          <h2 className="MarketAnalysis-Value">4,325.78</h2>
          <p className="MarketAnalysis-Growth">+1.2% this month</p>
        </div>
        <div className="MarketAnalysis-Divs">
          <h2 className="MarketAnalysis-Name">Nasdaq Composite</h2>
          <p className="MarketAnalysis-Short">COMP
    </p>
          <h2 className="MarketAnalysis-Value">13,215.24</h2>
          <p className="MarketAnalysis-Growth">+2.5% this month</p>
        </div>
        <div className="MarketAnalysis-Divs">
          <h2 className="MarketAnalysis-Name">Dow Jones Industrial Average</h2>
          <p className="MarketAnalysis-Short">DJI</p>
          <h2 className="MarketAnalysis-Value">34,215.12</h2>
          <p className="MarketAnalysis-Growth">+0.8% this month</p>
        </div>
      </div>
    </div>
  )
}