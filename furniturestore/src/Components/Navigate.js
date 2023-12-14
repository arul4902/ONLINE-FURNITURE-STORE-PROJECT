import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigate() {
    const navigate=useNavigate();
    const logbutton=()=>{navigate("/login")}
    const signbutton=()=>{navigate("/signup")}
  return (
    <div>
        <button onClick={logbutton}>Login In</button>
        <button onClick={signbutton}>Sign Up</button>
    </div>
  )
}