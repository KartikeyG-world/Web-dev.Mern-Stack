import React, { useCallback, useRef, useState , useEffect} from 'react'

const ExpensiveComponents = () => {
    const[count , setCount]= useState(0);
    const[text , setText]= useState("");
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(()=>{
        console.log("Running Expensive Calculation...");
        let result = 0;
        for(let i = 0 ; i<1000000000;i++){
        result +=i;
    }
        return result;
    },[count]);

    useEffect(() => {
      if(previousFunction.current){
        if(previousFunction.current === expensiveCalculation){
            console.log("Function not re-created");
        }
        else{
            console.log("Function got re-created");
        }
      }
      else{
        previousFunction.current = expensiveCalculation;
      }
    }, [expensiveCalculation])
    

  return (
    <div>
      <input id='input-fld'
      type='text'
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='"Type Something'
      />
      <br />
      <br />
      <h1>Expensive Calculation: {expensiveCalculation()}</h1>
      <br />
      <button onClick={()=>setCount(count+1)} id='increment-btn'>Increment</button>
      <br />
      <h1>Count : {count}</h1>
    </div>
  )
}

export default ExpensiveComponents
