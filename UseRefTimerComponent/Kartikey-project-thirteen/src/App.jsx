import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(()=>{
      setTime(time =>time+1);
    },1000);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
  <div>
    <h1>StopWatch :  {time} seconds</h1>
    <br />
    <div id='btn-dibba'>
      <button onClick={startTimer} id='start-btn'>
        Start
      </button>
      <br />
      <br />
      <button onClick={stopTimer} id='stop-btn'>
        Stop
      </button>
      <br />
      <br />
      <button onClick={resetTimer} id='reset-btn'>
        Reset
      </button>
    </div>
  </div>
  )
}

export default App
