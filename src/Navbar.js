import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
    <header>
      <div className='paddingSmall '>
        <nav>
          <ul className={navbar ? "navbar" : "flex"} onClick={()=>setNavbar(false)}>
            <li><NavLink
          to="/"
          id="myLinks"
          style={({ isActive }) => {
            return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
          }}
        >
          Home
        </NavLink></li>
        <li><NavLink
          to="/Bollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Bollywood{" "}
        </NavLink></li>
        <li> <NavLink
          to="/Hollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Hollywood
        </NavLink></li>
        <li><NavLink
          to="/Technology"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Technology
        </NavLink></li>
        <li><NavLink
          to="/Fitness"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Fitness
        </NavLink></li>
            <li> <NavLink
          to="/Food"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Food
        </NavLink></li>
          </ul>   
          <button className='barIcon' onClick={()=>{
            setNavbar(!navbar)
          }}> {navbar ?  <i className='fa fa-times'></i>: <i className='fa fa-bars'></i>}</button>       
        </nav>
      <hr id='NavHr' /> 
      </div>
    </header>
       {/* <div className="Navbar"> */}
        
        
        
       
        
       
      {/* </div> */}
    </>
  )
}

export default Navbar
