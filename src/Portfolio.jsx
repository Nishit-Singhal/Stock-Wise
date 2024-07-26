import "./Profile-Page.css"
export default function Portfolio(){
  return(
    <div>
      <h2 align="center" className="Protfolio-Heading">PORTFOLIO</h2>
      <div className="Portfolio">
        <div className="Portfolio-Divs">
          <h2 className="Stock-Name">Apple Inc.</h2>
          <p className="Stock-Short">AAPL</p>
          <h2 className="Stock-Value">$145.32</h2>
          <p className="Stock-Growth">+5.2% this month</p>
        </div>
        <div className="Portfolio-Divs">
          <h2 className="Stock-Name">Amazon.com, Inc.</h2>
          <p className="Stock-Short">AMZN

</p>
          <h2 className="Stock-Value">$3,215.78</h2>
          <p className="Stock-Growth">-2.1% this month</p>
        </div>
        <div className="Portfolio-Divs">
          <h2 className="Stock-Name">Microsoft Corporation</h2>
          <p className="Stock-Short">MSFT</p>
          <h2 className="Stock-Value">$285.64</h2>
          <p className="Stock-Growth">+3.8% this month</p>
        </div>
      </div>
    </div>
  )
}