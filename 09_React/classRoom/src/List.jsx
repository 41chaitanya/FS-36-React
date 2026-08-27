import React from 'react'
import { useState } from 'react'

const List = ({getList}) => {

  const list=getList()
  return (
    <div>
      {
        list.map((l,i)=>{
            return <p key={i}>{l}</p>
        })
      }
    </div>
  )
}

export default List
