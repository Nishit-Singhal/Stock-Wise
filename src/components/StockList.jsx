const StockList = (props) => {
    return (
        <div className="bg-white m-5 border-[1px] border-black rounded-md p-4 lg:w-48">
            <h3 className="text-lg font-bold">{props.match.ticker}</h3>
            <p className="text-gray-600">{props.match.name}</p>
            <div className="flex justify-between mt-5">
                <h1 className="text-2xl font-bold">${props.match.price}</h1>
                <div className="text-sm text-gray-500">View</div>
            </div>
        </div>
    )
}

export default StockList;
