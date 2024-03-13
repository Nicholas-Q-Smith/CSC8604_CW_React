import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';
// import "bootstrap/dist/css/bootstrap.min.css";
import "w3-css";



function Layout () {

  let navigate = useNavigate();

  let activeTab = 1;

  let style = "w3-bar-item w3-button w3-padding-16";

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
    {/* <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="w3-bar w3-black">
      <Tab eventKey="home" title="Home" className="w3-bar-item w3-button">
        <Link to="/">Home</Link>
      </Tab>
      <Tab eventKey="layout1" title="Layout 1" className="w3-bar-item w3-button">
        <Link to="layout1">Layout 1</Link>
      </Tab>
      <Tab eventKey="layout2" title="Layout 2" className="w3-bar-item w3-button">
        <Link to="layout2">Layout 2</Link>
      </Tab>
    </Tabs> */}


  <div class="w3-bar w3-border w3-white w3-xxlarge w3-mobile w3-top">
    <a onClick={()=> navigate('/')} class=
      {activeTab == 0 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Home</a>
    <a onClick={()=> navigate('/layout1')} class=
      {activeTab == 1 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Plot 1</a>
    <a onClick={()=> navigate('/layout2')} class=
    {activeTab == 2 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>Plot 2</a>
    <a onClick={()=> navigate('/new-iter-home')} class=
    {activeTab == 3 ? "w3-bar-item w3-button w3-padding-16 w3-red" : "w3-bar-item w3-button w3-padding-16 w3-white"}>New-Iter</a>
    {/* <a href="#" class="w3-bar-item w3-button w3-padding-16">Config</a> */}
  </div>

    {/* <Outlet /> */}
    </>
  );
}

export default Layout;