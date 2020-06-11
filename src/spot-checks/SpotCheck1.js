import React, { useState } from 'react'

export default function SpotCheck1() {
  const [counter, setCounter] = useState(1)
  
  const increaseCounter = () => setCounter(counter+1)

  const decreaseCounter = () => setCounter(counter-1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <h2>{counter}</h2>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>

      </div>
    </div>
  )
}