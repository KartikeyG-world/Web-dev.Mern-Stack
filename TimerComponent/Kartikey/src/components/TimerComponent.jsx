import React, { useState , useEffect } from 'react'
// import { useEffect } from 'react';


const TimerComponent = () => {
    const[seconds , setSeconds] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(()=>{
        console.log("Increasing")
        setSeconds(prevSeconds=>prevSeconds+1);
      },1000);
    
      return () => {
        console.log("Ruk GYA REEEEE")
        clearInterval(intervalId)
      }
    }, []);
    
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
