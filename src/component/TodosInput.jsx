import React from 'react'
import { useState } from 'react'

export default function TodosInput() {
    const [inch,setinch] = useState('')
  return (
    <div>
        <input onChange={(e)=>setinch(e.target.value)} value={inch} placeholder='Todos' type="text" />
        <button>Submit</button>
    </div>
  )
}
