import { useState , useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[input ,setInput] = useState(0);

  function expensiveTask(num){
    console.log("Inside Expensive Task");
    for(let i=0;i<=1000000000;i++){}
    return num*2;
  }
  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <button onClick={()=>setCount(count+1)} id='increment-btn'>Increment</button>
      <br />
      <br />
      <div>
        <h1>Count : {count}</h1>
      </div>
      <br />
      <input type="number" id='input-fld'
      placeholder='Enter The Number'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
      <br />
      <div>
        <h1>Double: {doubleValue}</h1>
      </div>
    </div>
  )
}

export default App