import React, { useState } from 'react'

export default function SpotCheck2() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [lesson, setLesson] = useState({ name: 'React Hooks', completed: false, started: false })

  const updateLesson = (key) => {
    const tempLesson = {...lesson}
    tempLesson[key] = true
    setLesson(tempLesson)
  }
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
      {isLoading ? <div>{'Page is loading...'}</div> : <p>{lesson.name}</p> }
      {<p>{lesson.completed ? 'Lesson status: Completed' : 
      lesson.started ? 'Lesson status: In progress' : 
      'Lesson status: Not started'}</p>}
      <button onClick={() => updateLesson('started')}>Begin Lesson</button> 
      <button onClick={() => updateLesson('completed')}>Complete Lesson</button>
      </div>
    </div>
  )
}