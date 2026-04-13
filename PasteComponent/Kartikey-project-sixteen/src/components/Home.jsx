import React, { useEffect, useState } from 'react'
import "../components/Home.css"
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { addToPaste, updateToPaste } from '../redux/PasteSlice';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const[title , setTitle]= useState('');
  const[value , setValue]= useState('');
  const [searchParams , setSearchParams]= useSearchParams();
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allPastes = useSelector((state)=>
  state.paste.pastes);  
  useEffect(() => {
  if(pasteId){
    const paste = allPastes.find((p)=> p._id === pasteId);

      // if(paste){
      setTitle(paste.title);
      setValue(paste.content);
      // }
  }
}, [pasteId, allPastes]);
    
  function createMyPaste(){
    const paste = {
      title :title,
      content:value,
      _id: pasteId||
        Date.now().toString(36),
        createAt:new Date().toISOString(),
    }

    if(pasteId){
      //update
      dispatch(updateToPaste(paste));
    }
    else{
      //create
      dispatch(addToPaste(paste));
    }

    //after creating or updation
    setTitle('');
    setValue('');
    setSearchParams({});

    navigate("/pastes");
  }

  return (
    <div>
      <div>
      <input type="text" 
      placeholder='Enter title here'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className=' input-fld'
      />
      <button id='btn' onClick={createMyPaste}>
        {
          pasteId?"Update Paste":"Create My Paste"
        }
      </button>
        
    </div>
    <div>
      <textarea
      value={value}
      placeholder='Enter content'
      onChange={(e)=> setValue(e.target.value)}
      rows={20}
      />
    </div>
    </div>
  )
}

export default Home
