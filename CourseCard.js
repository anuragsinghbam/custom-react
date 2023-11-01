import React from './react'

export default function CourseCard({ title, courseUrl, imageUrl }) {
  return (
    <a href={courseUrl} className='course-card' target='_blank'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </a>
  )
}
