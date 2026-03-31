import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

const UserContext = createContext();
const ThemeContext = createContext();

function App() {

  const [theme ,setTheme]= useState(`light`);
  const [user , setUser] = useState({name:"Kartikey"});
  return (
    <div>
      <UserContext.Provider value={user}>

      <ThemeContext.Provider value = {{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme===`light`?"beige":"Grey"}}>
        <ChildA/>
        </div>
      </ThemeContext.Provider>
      </UserContext.Provider>


      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}