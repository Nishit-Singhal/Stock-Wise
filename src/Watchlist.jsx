import "./index.css"
export default function Watchlist(){
    return(
        <div className="Watchlist">
            <h1 align="center">Watchlist</h1>
            <div className="Watchlist-Categories">
                <h2>Symbol</h2>
                <div className="Watchlist-Categories1">
                    <div><h2>Last</h2></div>
                    <div><h2>Chg</h2></div>
                    <div><h2>Chg%</h2></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>AUDJPY</p>
                <div className="Watchlist-Values1">
                    <div><p>101.95</p></div>
                    <div><p>-0.952</p></div>
                    <div><p>-0.93%</p></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>EURJPY</p>
                <div className="Watchlist-Values1">
                    <div><p>167.40</p></div>
                    <div><p>-1.433</p></div>
                    <div><p>-0.85%</p></div>
                </div>
            </div>
            <hr></hr>
            <h2>Indices</h2>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>NDX</p>
                <div className="Watchlist-Values1">
                    <div><p>19,754.34</p></div>
                    <div><p>-68.53</p></div>
                    <div><p>-0.35%</p></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>DJI</p>
                <div className="Watchlist-Values1">
                    <div><p>40,358.10</p></div>
                    <div><p>-57.35</p></div>
                    <div><p>-0.14%</p></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>VIX</p>
                <div className="Watchlist-Values1">
                    <div><p>15.45</p></div>
                    <div><p>0.73</p></div>
                    <div><p>4.96%</p></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>DXY</p>
                <div className="Watchlist-Values1">
                    <div><p>104.407</p></div>
                    <div><p>-0.060</p></div>
                    <div><p>-0.06%</p></div>
                </div>
            </div>
            <hr></hr>
            <h2>Stocks</h2>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>AAPL</p>
                <div className="Watchlist-Values1">
                    <div><p>225.01</p></div>
                    <div><p>1.05</p></div>
                    <div><p>0.47%</p></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>TSLA</p>
                <div className="Watchlist-Values1">
                    <div><p>246.38</p></div>
                    <div><p>-5.13</p></div>
                    <div><p>-2.04%</p></div>
                </div>
            </div>
            <hr></hr>
            <div className="Watchlist-Values">
                <p>NFLX</p>
                <div className="Watchlist-Values1">
                    <div><p>642.76</p></div>
                    <div><p>-4.74</p></div>
                    <div><p>-0.73%</p></div>
                </div>
            </div>
            <hr></hr>
            
        </div>
    )
}