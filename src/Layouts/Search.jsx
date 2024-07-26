import { useState } from "react";
import axios from "axios";
import StockList from "../components/StockList";

const Search = () => {
    const [key, setKey] = useState("");
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = "C8330U7VG2BEC4IP";

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=${API_KEY}`);
            setResults(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Search by stock ticker..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {results && results.bestMatches && (
                <div>
                    <h2>Results</h2>
                    <StockList matches={results.bestMatches} />
                </div>
            )}
        </div>
    );
};

export default Search;
