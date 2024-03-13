import { Outlet, Link, useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';
// import "bootstrap/dist/css/bootstrap.min.css";
import "w3-css";



function Layout () {

  let navigate = useNavigate();

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
    <a onClick={()=> navigate('/')} class="w3-bar-item w3-button w3-padding-16">Home</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-16">Plot 1</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-16">Plot 2</a>
    {/* <a href="#" class="w3-bar-item w3-button w3-padding-16">Config</a> */}
  </div>

    {/* <Outlet /> */}
    </>
  );
}

export default Layout;