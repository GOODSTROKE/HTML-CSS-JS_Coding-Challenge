import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import starImage from './star.png'
function App() {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <h1>Counter with Stars</h1>
        <div className='counter'>
          <button onClick={handleDecrement}>Remove 1</button>
          <h4 style={{ margin: '0 10px' }}>{count}</h4>
          <button onClick={handleIncrement}>Add 1</button>
        </div>
        <div className='stars'>
          {Array.from({ length: count }).map((_, index) => (
            <img key={index} src={starImage} alt='Star' className='star-img' />
          ))}
        </div>
      </div>
    </>
  )
}
export default App
