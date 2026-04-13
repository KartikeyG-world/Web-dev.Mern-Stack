import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/Paste.css";
import { removeFromSpace } from "../redux/PasteSlice";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSerachTerm] = useState("");

  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromSpace(pasteId));
  }

  return (
    <div>
      <input
        id="input-fld"
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSerachTerm(e.target.value)}
      />

      <div>
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div id="card">
                <div id="title">{paste.title}</div>
                <br />
                <div id="content">{paste.content}</div>
                <div id="btn-section">
                  <button id="btn-paste">
                    <NavLink id="btn-edit" to={`/?pasteId=${paste?._id}`}>
                      Edit
                    </NavLink>
                  </button>
                  <button id="btn-paste">
                    <NavLink to={`/pastes/${paste?._id}`} id="view-btn">
                      View
                    </NavLink>
                  </button>
                  <button
                    id="btn-paste"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    Delete
                  </button>
                  <button
                    id="btn-paste"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to ClipBoard");
                    }}
                  >
                    Copy
                  </button>
                  <button id="btn-paste">Share</button>
                </div>
                <br />
                <div>
                  {new Date(paste.createAt).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
