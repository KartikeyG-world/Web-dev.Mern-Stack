import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, incrementByAmount, increment , reset} from './feature/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount , setAmount] = useState(0);
  const count =useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleInByAmount(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div>
      <button onClick={handleIncrementClick} id='increment-btn'>+</button>
      <br />
      <br />
      <p id='para'>Count: {count}</p>
      <br />
      <button onClick={handleDecrementClick} id='decrement-btn'>-</button>
      <br />
      <br />
      <button onClick={handleResetClick} id='reset-btn'>Reset</button>
      <br />
      <br />
      <button onClick={handleInByAmount} id='inby-btn'>Inc. by amount</button>
      <br />
      <br />
      <input type='number'
      id='input-fld'
      value={amount}
      placeholder='Enter Amount'
      onChange={(e)=> setAmount(e.target.value)}
      />

    </div>
  )
}

export default App
