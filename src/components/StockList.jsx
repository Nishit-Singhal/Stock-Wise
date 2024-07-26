const StockList = ({ matches }) => {
    return (
        <div>
            {matches.map((match, index) => (
                <ul key={index} className="m-4 border-[2px] border-black rounded-md">
                    <li>Symbol: {match['1. symbol']}</li>
                    <li>Name: {match['2. name']}</li>
                    <li>Type: {match['3. type']}</li>
                    <li>Region: {match['4. region']}</li>
                    <li>Market Open: {match['5. marketOpen']}</li>
                    <li>Market Close: {match['6. marketClose']}</li>
                    <li>Timezone: {match['7. timezone']}</li>
                    <li>Currency: {match['8. currency']}</li>
                    <li>Match Score: {match['9. matchScore']}</li>
                </ul>
            ))}
        </div>
    );
};

export default StockList;
