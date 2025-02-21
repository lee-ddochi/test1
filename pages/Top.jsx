import React from 'react'
import topData from'../data/tops.json'
import '../style/main.scss'

const Top = () => {
  return (
    <div className='page tops'>
      <h1>상의</h1>
      <div className='outbox'>
        {topData.map(item=>(
          <div className='inbox' key={item.id}> 
          <img src={item.img}/>
          <h3>{item.price}원</h3>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Top