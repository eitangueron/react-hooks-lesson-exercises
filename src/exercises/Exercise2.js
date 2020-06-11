import React, { useState, useEffect } from 'react'
import axios from '../../node_modules/axios/dist/axios'

export default function Exercise2() {
  let [users, setUsers] = useState([])

  const getUsers = async () => {
    const users = await axios.get('https://randomuser.me/api/?results=5')
    setUsers(users.data.results)
  }

  useEffect(getUsers,[])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(user => <div>
          <p>{user.name.first}</p>
          <p>{user.name.last}</p>
          <img src={`${user.picture.thumbnail}`} />
        </div>)}

      </div>
    </div>
  )
}