import { Outlet, Link, useNavigate, useLocation} from "react-router-dom";
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';

import { useState } from "react";

import closeIcon from "../assets/icons/close-icon.svg";

import burgerMenu from "../assets/icons/burger-menu.svg";

import './HorizontalLayout.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "w3-css";

let isVisible = true;

function hide() {
    isVisible = !isVisible;
}

function Layout () {

  let navigate = useNavigate();

  let activeTab = 1;

  const [show, setShow] = useState(false);

  let visibility = "";

  if(window.location.pathname === "/") {
    activeTab = 0;
  } else if(window.location.pathname === "/layout1") {
    activeTab = 1;
  } else if(window.location.pathname === "/layout2") {
    activeTab = 2;
  } else if(window.location.pathname === "/new-iter-home") {
    activeTab = 3;
  }

  

  return (
    <>
  <div>
    <img src={burgerMenu} onClick={()=> {setShow(!show)}} className={"burgerMenu"}></img>
    {/* <button onClick={()=> {setShow(!show)}}>Show/Hide</button> */}
  </div>

  {/* Shows or hides the side navigation bar */}
  {show && <> 
  <div style={!isVisible ? {display: "none"} : {display: "block"}} className={"w3-sidebar w3-bar-block w3-border w3-white w3-xxlarge w3-mobile "}>
  
    <a onClick={()=> navigate('/')} class=
      {activeTab == 0 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Home</a>
    <a onClick={()=> navigate('/layout1')} class=
      {activeTab == 1 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Plot 1</a>
    <a onClick={()=> navigate('/layout2')} class=
    {activeTab == 2 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Plot 2</a>
    <a onClick={()=> navigate('/new-iter-home')} class=
    {activeTab == 3 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>New-Iter</a>
    <div onClick={()=> {setShow(!show)}} className={'w3-bar-item w3-button bordered'}>
    <p>Close Sidebar
    <img src={closeIcon} className={"closeIcon"}></img>
    </p>
    </div>
    
    
    
  </div>
  </>
  }

    
    </>
  );
  
}

export default Layout;