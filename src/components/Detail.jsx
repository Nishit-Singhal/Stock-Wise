import React from 'react'

const Detail = (props) => {
  console.log(props.data.ticker)
  return (
    <div className='h-screen w-screen mx-5'>
      {props.data.ticker}
    </div>
  )
}

export default Detail