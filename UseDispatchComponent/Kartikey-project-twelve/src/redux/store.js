import {configureStore , createSlice} from "@reduxjs/toolkit"
import counterReducer from "../feature/counter/counterSlice"
import { Provider } from "react-redux"

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }, 
}) 