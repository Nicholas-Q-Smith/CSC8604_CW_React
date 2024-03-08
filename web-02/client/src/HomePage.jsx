import React from 'react';



import Header from './components/pageFormat/Header';

import Footer from './components/pageFormat/Footer';

import './HomePage.css';

import HumidityIndicator from './components/HumidityIndicator';
import SoilMoistureIndicator from './components/SoilMoistureIndicator';

function HomePage(){

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
    }, []);

    return (
        <>
        
        <Header/>

        <hr class="rounded"></hr>
        
        <p>Welcome to the home page</p>
        <p>Node Proxy Confirmation: {!data ? "Loading..." : data}</p>

        <hr class="rounded"></hr>

        <HumidityIndicator/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator/>


        <Footer></Footer>
        
        </>
        
        

        
        );
    }


export default HomePage;