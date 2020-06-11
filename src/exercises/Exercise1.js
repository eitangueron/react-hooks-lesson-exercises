import React, { useState } from 'react'

export default function Exercise1() {
  const [nameInput,setName] = useState('')
  const [cityInput,setCity] = useState('')
  const [country,setCountry] = useState('')

  const handleChange = (e) => {
    if(e.target.name === 'name'){
      setName(e.target.value)
    } else if (e.target.name === 'city'){
      setCity(e.target.value)
    } else {
      setCountry(e.target.value)
    }
  }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" name="name" placeholder="name" value={nameInput} onChange={handleChange}/>
        <input type="text" name="city" placeholder="city" value={cityInput} onChange={handleChange}/>
        <select name="country" id="country-bar" onChange={handleChange} placeholder="check"> 
        <option disabled selected value="check">Country</option>
          {countries.map(country => <option value={country}>{country}</option>)}
        </select>
      </div>
    </div>
  )
}