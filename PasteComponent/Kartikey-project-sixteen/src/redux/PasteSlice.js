import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState={
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    :[] 
}
export const PasteSlice = createSlice({
  name: 'Paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes" , JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
    },
    updateToPaste: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=> item._id===paste._id);
      if(index>=0){

        state.pastes [index] = paste;

        localStorage.setItem("pastes",
        JSON.stringify(state.pastes));

        toast.success("Paste updated")
      }
    },
    resetAllPaste: (state, action) => {
     state.pastes=[];
     localStorage.removeItem("pastes")
    },
    removeFromSpace:(state , action)=>{

         const pasteId = action.payload;
        console.log(pasteId);
        const index = state.pastes.findIndex((item)=>item._id===pasteId);
          if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",
        JSON.stringify(state.pastes));

        toast.success("Paste Deleted")
        }
    },
  }
})


export const { addToPaste, updateToPaste, resetAllPaste , removeFromSpace } = PasteSlice.actions

export default PasteSlice.reducer