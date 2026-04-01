import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/dashboard")
  }
  return (
    <div>
      Home Page
      <br />
      <br />
      <button onClick={handleClick}>
        Go to Dashboard
      </button>
    </div>
  )
}

export default Home
