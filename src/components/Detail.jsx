import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip } from 'recharts'

const Detail = (props) => {
  console.log(props.data.ticker)
  return (
    <div className='max-w-screen mx-5 p-4 border-[1px] border-black bg-white'>
      <div className='mb-10'>
        <h1 className="text-2xl font-bold">{props.data.name}</h1>
        <p className="text-gray-600">({props.data.ticker})</p>
      </div>
      <div className='my-6'>
        <h3 className="text-lg font-bold">Last Week's Performance</h3>
        <div className='max-w-full'>
          <LineChart width={360} height={250} data={props.data.historicalPerformance}>
            <XAxis dataKey="date" />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
          </LineChart>
        </div>
      </div>
      <div className='my-6'>
        <h3 className="text-lg font-bold">Forcasted Trend</h3>
        <div className='flex justify-between mt-2'>
          <div>
            <p className="text-gray-700">Next Week</p>
            <h5 className="text-lg font-bold ">{props.data.forecastedTrend.nextMonth}</h5>
          </div>
          <div>
            <p className="text-gray-700">Next Month</p>
            <h5 className="text-lg font-bold ">{props.data.forecastedTrend.nextMonth}</h5>
          </div>
          <div>
            <p className="text-gray-700">Next Quarter</p>
            <h5 className="text-lg font-bold ">{props.data.forecastedTrend.nextQuarter}</h5>
          </div>
        </div>
      </div>
      <div className='my-6'>
        <h3 className="text-lg font-bold">Key Metrics</h3>
        <div className='flex justify-between mt-2'>
          <div>
            <p className="text-gray-700">P/E</p>
            <h5 className="text-lg font-bold ">{props.data.metrics.pe}</h5>
          </div>
          <div>
            <p className="text-gray-700">EPS</p>
            <h5 className="text-lg font-bold ">{props.data.metrics.eps}</h5>
          </div>
          <div>
            <p className="text-gray-700">Dividend</p>
            <h5 className="text-lg font-bold ">{props.data.metrics.dividend}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail