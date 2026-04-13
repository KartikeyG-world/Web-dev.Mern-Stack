import { configureStore } from '@reduxjs/toolkit'
import { PasteSlice } from './redux/PasteSlice'

export default configureStore({
  reducer: {
    paste: PasteSlice.reducer,
  }
})