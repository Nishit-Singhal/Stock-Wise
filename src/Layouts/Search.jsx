import { useState } from "react";
import axios from "axios";
import StockList from "../components/StockList";
import AlphaVantage from "../assets/SampleData/AlphaVantage";
import Detail from '../components/Detail.jsx'

const Search = () => {
    const [key, setKey] = useState("");
    const [results, setResults] = useState(AlphaVantage);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(false)
    const API_KEY = "ER9PZOC93XAT2HX2";

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=${API_KEY}`);
            console.log(response)
            setResults(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex gap-4 m-5">
                <input
                    type="text"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Search by stock ticker..."
                    className="border-[1px] border-black rounded-md py-2 px-4 grow"
                />
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className={`bg-white rounded-md border-[1px] border-black px-3 py-2 transition-colors duration-200 ${loading ? 'cursor-not-allowed' : 'hover:bg-[#e6f2ff]'}`}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {results && results.bestMatches && (
                <div>
                    {results.bestMatches.map((match, index) => (
                        <div 
                            className="lg:flex lg:flex-row lg:justify-around"
                            key={index}>
                            {/* onClick={view ? setView(false) : setView(true)}> */}
                        <StockList match={match}/>
                        </div>
                    ))}

                </div>
            )}
            {view ? <Detail /> : ''} 
        </div>
    );
};

export default Search;
