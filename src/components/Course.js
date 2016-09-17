import React from 'react'

const Course = ({name, onClick}) => {
  return <div className='course' data-course={name} onClick={onClick}>{name}</div>
}

export default Course
