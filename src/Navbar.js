import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = ()=>{
    setClick(!click)
  }

  return (
    <>
      <nav className="navbar2">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                // exact
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                style={({isActive})=>{
                  return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/Bollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                style={({isActive})=>{
                  return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
                }}
              >
                Bollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/Hollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                style={({isActive})=>{
                  return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
                }}
              >
                Hollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/Technology"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                style={({isActive})=>{
                  return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
                }}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/Fitness"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                style={({isActive})=>{
                  return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
                }}
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/Food"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                style={({isActive})=>{
                  return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
                }}
              >
                Food
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ?"fas fa-times" : "fas fa-bars"}></i> */}
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <hr id='NavHr' />
    </>
  )
}

export default Navbar


// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//   const [navbar, setNavbar] = useState(false)
//   return (
//     <>
//     <header>
//       <div className='paddingSmall '>
//         <nav>
//           <ul className={navbar ? "navbar" : "flex"} onClick={()=>setNavbar(false)}>
//             <li><NavLink
//           to="/"
//           id="myLinks"
//           style={({ isActive }) => {
//             return isActive
//               ? { color: "hotpink", fontWeight: "bold" }
//               : { color: "rebeccapurple" };
//           }}
//         >
//           Home
//         </NavLink></li>
//         <li><NavLink
//           to="/Bollywood"
//           id="myLinks"
//           style={({ isActive }) => {
//             return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
//           }}
//         >
//           Bollywood{" "}
//         </NavLink></li>
//         <li> <NavLink
//           to="/Hollywood"
//           id="myLinks"
//           style={({ isActive }) => {
//             return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
//           }}
//         >
//           Hollywood
//         </NavLink></li>
//         <li><NavLink
//           to="/Technology"
//           id="myLinks"
//           style={({ isActive }) => {
//             return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
//           }}
//         >
//           Technology
//         </NavLink></li>
//         <li><NavLink
//           to="/Fitness"
//           id="myLinks"
//           style={({ isActive }) => {
//             return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
//           }}
//         >
//           Fitness
//         </NavLink></li>
//             <li> <NavLink
//           to="/Food"
//           id="myLinks"
//           style={({ isActive }) => {
//             return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
//           }}
//         >
//           Food
//         </NavLink></li>
//           </ul>   
//           <button className='barIcon' onClick={()=>{
//             setNavbar(!navbar)
//           }}> {navbar ?  <i className='fa fa-times'></i>: <i className='fa fa-bars'></i>}</button>       
//         </nav>
//       </div>
//     </header>
//       <hr id='NavHr' /> 
//        {/* <div className="Navbar"> */}
        
        
        
       
        
       
//       {/* </div> */}
//     </>
//   )
// }

// export default Navbar
