import { useNavigate } from "react-router-dom";

import { useState } from "react";

import closeIcon from "../assets/icons/close-icon.svg";

import burgerMenu from "../assets/icons/burger-menu.svg";

import homeMenu from "../assets/icons/home-menu-icon.svg";

import updateIcon from '../assets/icons/auto-update-icon.svg';

import graphIcon from '../assets/icons/graph-icon.svg';

import SwitchToggle from './SwitchToggle'

import './HorizontalLayoutNav.css';

import "w3-css";

let isVisible = true;


//hide the navbar manually if required
function hide() {
    isVisible = !isVisible;
}

function Layout ({ onToggle }) {

  let navigate = useNavigate();

  let activeTab = 1;


  //react hook to show or hide the sidebar
  const [show, setShow] = useState(false);

  if(window.location.pathname === "/") {
    activeTab = 0;
  } else if(window.location.pathname === "/sensors1") {
    activeTab = 1;
  } else if(window.location.pathname === "/sensors2") {
    activeTab = 2;
  } else if(window.location.pathname === "/sensors3") {
    activeTab = 3;
  }

  //First section is top navigation bar
  return (
    <>
  <div class="navgrid"> 
          <div className={"burgerContainer"}>
            <img className={"burgerMenu"} src={burgerMenu}onClick={()=> {setShow(!show)}}></img>
          </div>

          <div className={"graphContainer"}>
            <img className={"graphIcon"} src={graphIcon} onClick={()=> navigate('/graph')}/>
          </div>

          <div className={"homeContainer"}>
            <img className={"homeMenu"} src={homeMenu} onClick={()=>navigate('/')}></img>
          </div>

          <div className={"refreshContainer"}>
            <img className={"refreshIcon"} src={updateIcon} onClick={()=>window.location.reload()}></img>

          </div>

          <div className={"autoUpdateContainer"}>

              <SwitchToggle onToggle={onToggle}/>
            
          </div>
          </div>
   
  {/* Second section includes JSX to show or hide the side navigation bar */}
  {show && <> 
  <div style={!isVisible ? {display: "none"} : {display: "block"}} className={"w3-sidebar w3-bar-block w3-border w3-white w3-xxlarge w3-mobile "}>
  
    <a onClick={()=> navigate('/')} class=
      {activeTab == 0 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Home</a>
    <a onClick={()=> navigate('/sensors1')} class=
      {activeTab == 1 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Plot 1</a>
    <a onClick={()=> navigate('/sensors2')} class=
    {activeTab == 2 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Plot 2</a>
    <a onClick={()=> navigate('/sensors3')} class=
    {activeTab == 3 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Example Plot</a>
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