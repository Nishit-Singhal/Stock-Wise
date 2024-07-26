import "./index.css"
export default function Sensex() {
    return (
        <div align="center" className="Sensex">
            <h1 className="Sensex-Heading">Sensex</h1>
            <div className="Categories">
                <h2>1D <hr></hr></h2>
                <h2>5D <hr></hr></h2>
                <h2>1M <hr></hr></h2>
                <h2>6M <hr></hr></h2>
                <h2>1Y <hr></hr></h2>
                <h2>5Y <hr></hr></h2>
            </div>
            <div>
                <img className="Data" src="src/assets/1d sensex.png"></img>
            </div>
        </div>
    )
}