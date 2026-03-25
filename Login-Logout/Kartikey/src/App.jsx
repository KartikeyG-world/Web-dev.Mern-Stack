import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn, setLogin] = useState(true)
  
      if(isLoggedIn === true){
        return <LogoutBtn/>
      }
      else{
        return <LoginBtn/>
      }
}

export default App
