const StockList = (props) => {
    return (
        <ul className="bg-white m-4 border-[1px] border-black rounded-md p-4 lg:w-48">
            <li><h3 className="font-semibold">{props.match['1. symbol']}</h3></li>
            <li><p className="text-sm text-gray-600">{props.match['2. name']}</p></li>
            {/* <li>Type: {props.match['3. type']}</li> */}
            <li><p className="mt-2">{props.match['4. region']}</p></li>
            {/* <li>Market Open: {props.match['5. marketOpen']}</li> */}
            {/* <li>Market Close: {props.match['6. marketClose']}</li> */}
            {/* <li>Timezone: {props.match['7. timezone']}</li> */}
            {/* <li>Currency: {props.match['8. currency']}</li> */}
            {/* <li>Match Score: {props.match['9. matchScore']}</li> */}
        </ul>
    )
}

export default StockList;
