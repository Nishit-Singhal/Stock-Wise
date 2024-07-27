import { useEffect, useState } from "react";
import axios from "axios";
import StockList from "../components/StockList";
import SampleData from "../assets/SampleData/SampleData.jsx";
import Detail from '../components/Detail.jsx'
import { Link } from "react-router-dom";

const Search = () => {
    const [key, setKey] = useState("");
    const [results, setResults] = useState(SampleData);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const API_KEY = "ER9PZOC93XAT2HX2";

    // Scroll to the bottom when view is true
    useEffect(() => {
        if (view) {
            setTimeout(ScrollToBottom, 0)
        }
    }, [view])


    // Scroll to bottom of the screen
    const ScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    // Toggle Color of a map element with view when clicked
    const toggleColor = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    }

    // When we click on a search result, show the graph
    const toggleView = (index) => {
        setView(prevView => !prevView);
        toggleColor(index);
    }

    // If api is working fetch from here
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
            <Link to={'/'}>
                <div className="text-3xl mt-5 mx-5 font-semibold">Home</div>
            </Link>
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
            {results && (
                <div>
                    {results.map((match, index) => (
                        <div
                            className={`hover:translate-y-[-10px] transition-transform cursor-pointer ${index === selectedIndex ? 'bg-blue-200' : ''}`}
                            key={index}
                            onClick={() => toggleView(index)}>
                            <StockList match={match} />
                        </div>
                    ))}
                </div>
            )}
            {view && <Detail />}
        </div>
    );
};

export default Search;
