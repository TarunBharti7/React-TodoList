import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [mode , setMode] = useState("light");
  const [icon , setIcon] = useState(" ☀️ ")
  const theme = () =>{
      if(mode == "light"){
        setMode("dark");
        setIcon(" ☀️ ")
      }else{
        setMode("light");
        setIcon(" 🌕 ")
      }
  }

  useEffect(() => {
      document.body.className = mode;

  },[mode]);
  return (
    <>
        <nav>
            <h1>Mission Complete ⚔️</h1>
            <button className='s-btn' onClick={theme}>{icon}</button>
        </nav>

        <p>{5 == 7}</p>
    </>
  )
}

export default Navbar