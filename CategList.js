import React from 'react'
import CategCarte from './CategCarte'

function CategList({prod}) {
  return (
    <div>
      {prod.map((el)=>
      <CategCarte el={el}/>)}
    </div>
  )
}

export default CategList