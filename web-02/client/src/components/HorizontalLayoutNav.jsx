import { Outlet, Link, useNavigate, useLocation} from "react-router-dom";
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';

import Switch from "react-switch";

import { useState } from "react";

import closeIcon from "../assets/icons/close-icon.svg";

import burgerMenu from "../assets/icons/burger-menu.svg";

import homeMenu from "../assets/icons/home-menu-icon.svg";

import updateIcon from '../assets/icons/auto-update-icon.svg';

import SwitchToggle from './SwitchToggle'

import './HorizontalLayoutNav.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "w3-css";
import { Component } from "devextreme-react/cjs/core/component";

let isVisible = true;

let isAutoUpdate = false;









function hide() {
    isVisible = !isVisible;
}



function Layout () {

  let navigate = useNavigate();

  let activeTab = 1;

  const [show, setShow] = useState(false);

  const [autoUpdate, setAutoUpdate] = useState(false);

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
  <div class="navgrid"> 
          <div className={"burgerContainer"}>
            <img className={"burgerMenu"} src={burgerMenu}onClick={()=> {setShow(!show)}}></img>
          </div>

          <div className={"homeContainer"}>
            <img className={"homeMenu"} src={homeMenu} onClick={()=>navigate('/')}></img>
          </div>

          <div className={"refreshContainer"}>
            <img className={"refreshIcon"} src={updateIcon} onClick={()=>window.location.reload()}></img>

          </div>

          <div className={"autoUpdateContainer"}>

            
              <SwitchToggle/>
            
          </div>
          </div>
          
          
          {/* <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li> */}
  
        
    


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