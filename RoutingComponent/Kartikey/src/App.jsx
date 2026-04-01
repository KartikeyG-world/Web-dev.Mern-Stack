import { createBrowserRouter , RouterProvider } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import ParamComp from "./components/ParamComp"

function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
          <NavBar/>
          <Home/>
        </div>
      },
      {
        path:"/about",
        element:
        <div>
          <NavBar/>
          <About/>
        </div>        
      },
      {
        path:"/dashboard",
        element:
        <div>
          <NavBar/>
          <Dashboard/>
        </div>
      },

      {
        path:"/student/:id",
        element:
        <div>
          <NavBar/>
          <ParamComp/>
        </div>
      }
    ]
  )

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
