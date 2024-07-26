const StockList = ({ matches }) => {
    return (
        <div>
            {matches.map((match, index) => (
                <ul key={index} className="bg-white m-4 border-[1px] border-black rounded-md p-4">
                    <li><h3 className="font-semibold">{match['1. symbol']}</h3></li>
                    <li><p className="text-sm text-gray-600">{match['2. name']}</p></li>
                    {/* <li>Type: {match['3. type']}</li> */}
                    <li><p className="mt-2">{match['4. region']}</p></li>
                    {/* <li>Market Open: {match['5. marketOpen']}</li> */}
                    {/* <li>Market Close: {match['6. marketClose']}</li> */}
                    {/* <li>Timezone: {match['7. timezone']}</li> */}
                    {/* <li>Currency: {match['8. currency']}</li> */}
                    {/* <li>Match Score: {match['9. matchScore']}</li> */}
                </ul>
            ))}
        </div>
    );
};

export default StockList;
