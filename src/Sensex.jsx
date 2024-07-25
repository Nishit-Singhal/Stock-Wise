import "./index.css"
export default function Sensex(){
    return(
        <div className="Sensex">
            <h1 className="Sensex-Heading">Sensex</h1>
            <div className="Categories">
            <div><h2>1D</h2></div>
            <hr></hr>
            <div><h2>5D</h2></div>
            <hr></hr>
            <div><h2>1M</h2></div>
            <hr></hr>
            <div><h2>6M</h2></div>
            <hr></hr>
            <div><h2>1Y</h2></div>
            <hr></hr>
            <div><h2>5Y</h2></div>
            </div>
            <div>
                <img className="Data" src="src/assets/1d sensex.png"></img>
            </div>
        </div>
    )
}