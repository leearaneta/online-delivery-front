import React from 'react'

const Item = ({id, name, onClick}) => {
  return <div className='course' data-id={id} onClick={onClick}>{name}</div>
}

export default Item
