import React from 'react'
import Counter from './component/Counter'
import Todos from './component/Todos'
import './index.css'

export default function App() {
  return (
    <div className="App">
      <h5>Redux Day :  2</h5>
      <Counter/>
      <Todos/>
    </div>
  )
}
