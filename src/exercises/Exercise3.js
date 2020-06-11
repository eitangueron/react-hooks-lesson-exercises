import React, { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [expenses, setExpenses] = useState([])
  const [month,setMonth] = useState(0)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const updateMonth = (e) => {
    setMonth(e.target.value)
  }

  const getExpenses = () => {
    fetchExpenses(month)
    .then((expenses) => setExpenses(expenses))
  }

  useEffect(getExpenses,[month])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="months-bar" id="months-bar" onChange={updateMonth}>
          {months.map((month,i) => <option value={i}>{month}</option>)}
        </select>
        {expenses.map(expense => <p>{expense.item}      {expense.date}      {expense.amount}</p>)}
      </div>
    </div>
  )
}