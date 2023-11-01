import CourseCard from './CourseCard'
import { coursesData } from './courseData'
import React from './react'
import { render } from './react-dom'

import './App.css'

function App() {
  return (
    <div className='container'>
      <h1>Hello Geeks_</h1>
      <p> I am Anurag </p>
      <h2>Checkout my courses on YouTube </h2>
      <div className='courses-container'>
        {coursesData.map(({ title, courseUrl, imageUrl }) => (
          <CourseCard title={title} courseUrl={courseUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  )
}

render(<App />, document.querySelector('#root'))
