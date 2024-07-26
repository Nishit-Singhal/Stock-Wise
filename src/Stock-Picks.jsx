import "./Profile-Page.css"
export default function StockPicks(){
  return(
    <div>
      <h2 align="center" className="StockPicks-Heading">STOCK PICKS</h2>
      <div className="StockPicks">
        <div className="StockPicks-Divs">
          <h2 className="Stock-Name">Tesla, Inc.</h2>
          <p className="Stock-Short">TSLA</p>
          <h2 className="Stock-Value">$225.87</h2>
          <p className="Stock-Growth">+12.4% this month</p>
        </div>
        <div className="StockPicks-Divs">
          <h2 className="Stock-Name">Nvidia Corporation</h2>
          <p className="Stock-Short">NVDA
    </p>
          <h2 className="Stock-Value">$312.45</h2>
          <p className="Stock-Growth">+7.9% this month</p>
        </div>
        <div className="StockPicks-Divs">
          <h2 className="Stock-Name">Shopify Inc.</h2>
          <p className="Stock-Short">SHOP</p>
          <h2 className="Stock-Value">$45.21</h2>
          <p className="Stock-Growth">-3.2% this month</p>
        </div>
      </div>
    </div>
  )
}