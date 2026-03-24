import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const[name , setName] = useState(``)
  return (
    <div>
      <Card name = {name} setName ={setName} />
      <p>I am inside Parent components and the value of name is: {name}</p>
      <p>Hello {name} Ji</p>
    </div>
  )
}

export default App
