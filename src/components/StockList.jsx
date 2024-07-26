const StockList = ({ matches }) => {
    return (
        <ul>
            {matches.map((match, index) => (
                <li key={index}>
                    <p>Symbol: {match['1. symbol']}</p>
                    <p>Name: {match['2. name']}</p>
                    <p>Type: {match['3. type']}</p>
                    <p>Region: {match['4. region']}</p>
                    <p>Market Open: {match['5. marketOpen']}</p>
                    <p>Market Close: {match['6. marketClose']}</p>
                    <p>Timezone: {match['7. timezone']}</p>
                    <p>Currency: {match['8. currency']}</p>
                    <p>Match Score: {match['9. matchScore']}</p>
                </li>
            ))}
        </ul>
    );
};

export default StockList;
