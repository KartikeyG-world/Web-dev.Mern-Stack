import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/about")
  }
  return (
    <div>
      Dashboard Page
      <br />
      <br />
      <button onClick={handleClick}>
        Go to About
      </button>
    </div>
  )
}

export default Dashboard
