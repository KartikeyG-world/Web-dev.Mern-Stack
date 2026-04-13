import React, { useEffect, useState } from 'react'
import "../components/Home.css"
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { addToPaste, resetAllPaste, updateToPaste } from '../redux/PasteSlice';
import { useNavigate } from "react-router-dom";

const ViewPaste = () => {
  const {id} = useParams();

  const allPastes = useSelector((state)=>state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id===id)[0];
  console.log("Final Paste " , paste);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
          className=" input-fld"
        />
        {/* <button id="btn" onClick={createMyPaste}>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div>
        <textarea
          value={paste.content}
          placeholder="Enter content"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          disabled
        />
      </div>
    </div>
  );
};

export default ViewPaste;
