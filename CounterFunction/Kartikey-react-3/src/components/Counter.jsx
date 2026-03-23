// import React from 'react'
import React,{useState} from 'react'
import "./Counter.css"

function Counter() {
    const [count , setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You Have cliked {count} times</p>
      <button id='btn' onClick={()=> {setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
