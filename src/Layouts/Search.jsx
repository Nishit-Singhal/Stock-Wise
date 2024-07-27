import { useEffect, useRef, useState } from "react";
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
    const ref = useRef(null)
    // const API_KEY = "ER9PZOC93XAT2HX2";      doesn't work

    useEffect(() => {
        // search for key (ticker) in the SampleData
        const result = searchTicker(SampleData, key)
        setResults(result)
    }, [key])


    // Scroll to bottom of the screen
    const ScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    // Toggle Color of a map element with view when clicked
    const toggleColor = (index) => {
        setSelectedIndex(index);
    }

    // When we click on a search result, show the graph
    const toggleView = (index) => {
        setView(prevView => !prevView);
        toggleColor(index);
        if (!view) {
            setTimeout(ScrollToBottom, 0)
        }
    }

    const searchTicker = (data, substring) => {
        substring = substring.toUpperCase()
        return data.filter(item => item.ticker.includes(substring))
    }

    // If API is working uncomment search button and handleSearch function. Don't use useEffect.
    // It will create a lot of requests and burn our quotas.
    // const handleSearch = async () => {
    //     setLoading(true);
    //     setError(null);
    //     setResults(null);

    //     try {
    //         const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=${API_KEY}`);
    //         console.log(response)
    //         setResults(response.data);
    //     } catch (error) {
    //         setError(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div>
            <div className="Name">
                <Link to={'/'}><img className="Logo" src="src/assets/Stock-Wise-Logo.png"></img></Link>
                <Link to={'/'}><h1 className="App-Name">Stock Wise</h1></Link>
            </div>
            <div className="Navbar">
                <Link to={'/'}><h2 className="Home-Heading">Home</h2></Link>
                <Link to={'/watchlist'}><h2 className="Watchlist-Heading">Watchlist</h2></Link>
                <Link to={'/profile'}><h2 className="Profile-Heading">Profile</h2></Link>
            </div>
            {/* <Link to={'/'}>
                <div className="text-3xl mt-5 mx-5 font-semibold">Home</div>
            </Link> */}
            <div className="flex gap-4 m-5">
                <input
                    type="text"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Search by stock ticker..."
                    className="border-[1px] border-black rounded-md py-2 px-4 grow"
                />

                {/* If API is working uncomment search button and handleSearch function. Don't use useEffect.
                It will create a lot of requests and burn our quotas. */}
                {/* <button
                    onClick={handleSearch}
                    disabled={loading}
                    className={`bg-white rounded-md border-[1px] border-black px-3 py-2 transition-colors duration-200 ${loading ? 'cursor-not-allowed' : 'hover:bg-[#e6f2ff]'}`}>
                    {loading ? 'Searching...' : 'Search'}
                </button> */}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {results && (
                <div className="lg:flex">
                    {results.map((match, index) => (
                        <div
                            className="hover:translate-y-[-10px] hover:bg-blue-200 transition-transform cursor-pointer"
                            key={index}
                            onClick={() => toggleView(index)}>
                            <StockList match={match} />
                        </div>
                    ))}
                </div>
            )}
            {/* Pass the data of the component currently selected in Detail component  */}
            {view && selectedIndex && (<Detail data={SampleData[selectedIndex]} />)}

            {/*  Can also use section here for scroll-based animations.  */}
        </div>
    );
};

export default Search;
