import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
// import {FaRocket} from 'react-icons/fa';
import images from "../../constants/images";
import image from '../../assets/chef.png'
import "./Navbar.css";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg p-0" id="nav" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="app__navbar-logo">
            <img src={images.gericht} alt="app logo" />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#home">
              <FaRocket style={{ width: 20, height: 20 }} />
            </a>
            <a className="nav-link" href="#menu">
              {/* <FontAwesomeIcon icon="fa-solid fa-rocket" /> */}
              My projects
            </a>
            <a className="nav-link" href="#process">
              help
            </a>

            <a className="nav-link " href="#about">
              <BsFillBellFill style={{ width: 20, height: 20 }} />
            </a>

          <Button style={{borderColor:'lightblue' ,borderRadius:5,paddingLeft:9,paddingRight:9,color:"lightblue",marginLeft:10 ,backgroundColor:'#fff'}}>upgrade</Button>

            <a href="#contact" style={{ marginLeft:20}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop:3,
                 
                }}
              >
                <img
                 src={image}
                  alt=""
                  style={{ width: 30, height: 30, borderRadius: "50%" }}
                />
                <p>{}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

// <nav className="app__navbar">
//   <div className="app__navbar-logo">
//     <img src={images.gericht} alt="app logo" />
//   </div>
//   <ul className="app__navbar-links">
//     <li className="p__opensans">
//       <a href="#Services">Services</a>
//     </li>
//     <li className="p__opensans">
//       <a href="#work">Work</a>
//     </li>
//     <li className="p__opensans">
//       <a href="#about">About</a>
//     </li>
//     <li className="p__opensans">
//       <a href="#consulant">Consulant</a>
//     </li>
//     <li className="p__opensans">
//       <a href="#contact">Contact</a>
//     </li>
//   </ul>
//   <div className="app__navbar-smallscreen">
//     <GiHamburgerMenu
//       color="#fff"
//       fontSize={27}
//       onClick={() => setToggleMenu(true)}
//     />

//     {toggleMenu && (
//       <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
//         <MdOutlineMenu
//           fontSize={27}
//           className="overlay__close"
//           onClick={() => setToggleMenu(false)}
//         />
//         <ul className="app__navbar-smallscreen_links">
//           <li className="p__opensans">
//             <a href="#Services">Services</a>
//           </li>
//           <li className="p__opensans">
//             <a href="#work">Work</a>
//           </li>
//           <li className="p__opensans">
//             <a href="#about">About</a>
//           </li>
//           <li className="p__opensans">
//             <a href="#consulant">Consulant</a>
//           </li>
//           <li className="p__opensans">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     )}
//   </div>
// </nav>
