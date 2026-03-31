import React , {useContext} from 'react'
import {UserContext, ThemeContext} from '../App'

const ChildC = () => {
    const user = useContext(UserContext)
    const {theme , setTheme} = useContext(ThemeContext);
    function handleClick() {
        if(theme === `light`)
            setTheme(`Grey`)
        else
        setTheme(`light`)
    }
  return (
    <div id='dabba'>
     <button onClick={handleClick}>
        Change Theme
     </button>
     <br />
     <br />
     {user.name}
    </div>
  )
}

export default ChildC
