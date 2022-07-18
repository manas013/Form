import React from 'react'
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className='header'>

          <NavLink to={"/"}>Home</NavLink>
    
            <NavLink to={"/Login"}>Login</NavLink>
         
            <NavLink to={"/Form"}>Form</NavLink>
       
    </div>
  )
}

export default Home