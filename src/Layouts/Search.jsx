import { useState } from "react";
import axios from "axios";
import StockList from "../components/StockList";

const Search = () => {
    const [key, setKey] = useState("");
    const [results, setResults] = useState({
        "bestMatches": [
            {
                "1. symbol": "TSCO.LON",
                "2. name": "Tesco PLC",
                "3. type": "Equity",
                "4. region": "United Kingdom",
                "5. marketOpen": "08:00",
                "6. marketClose": "16:30",
                "7. timezone": "UTC+01",
                "8. currency": "GBX",
                "9. matchScore": "0.7273"
            },
            {
                "1. symbol": "TSCDF",
                "2. name": "Tesco plc",
                "3. type": "Equity",
                "4. region": "United States",
                "5. marketOpen": "09:30",
                "6. marketClose": "16:00",
                "7. timezone": "UTC-04",
                "8. currency": "USD",
                "9. matchScore": "0.7143"
            },
            {
                "1. symbol": "TSCDY",
                "2. name": "Tesco plc",
                "3. type": "Equity",
                "4. region": "United States",
                "5. marketOpen": "09:30",
                "6. marketClose": "16:00",
                "7. timezone": "UTC-04",
                "8. currency": "USD",
                "9. matchScore": "0.7143"
            },
            {
                "1. symbol": "TCO2.FRK",
                "2. name": "TESCO PLC ADR/1 LS-05",
                "3. type": "Equity",
                "4. region": "Frankfurt",
                "5. marketOpen": "08:00",
                "6. marketClose": "20:00",
                "7. timezone": "UTC+02",
                "8. currency": "EUR",
                "9. matchScore": "0.5455"
            },
            {
                "1. symbol": "TCO0.FRK",
                "2. name": "TESCO PLC LS-0633333",
                "3. type": "Equity",
                "4. region": "Frankfurt",
                "5. marketOpen": "08:00",
                "6. marketClose": "20:00",
                "7. timezone": "UTC+02",
                "8. currency": "EUR",
                "9. matchScore": "0.5455"
            }
        ]
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
                    className="border-[1px] border-black rounded-md p-1 grow"
                />
                <button 
                    onClick={handleSearch} 
                    disabled={loading}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(212, 234, 255, 3)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    className="bg-white rounded-md border-[1px] border-black px-3 py-2">
                    {loading ? 'Searching...' : 'Search'}
                </button>
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
