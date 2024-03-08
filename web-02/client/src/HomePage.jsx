import React from 'react';



import Header from './components/pageFormat/Header';

import Footer from './components/pageFormat/Footer';

import './HomePage.css';

import HumidityIndicator from './components/HumidityIndicator';
import SoilMoistureIndicator from './components/SoilMoistureIndicator';
import TemperatureIndicator from './components/TemperatureIndicator';

function HomePage(){

    const [data, setData] = React.useState(null);

    const [temp, setTemp] = React.useState(null);

    React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      
    fetch("/sensors")
      .then((res) => res.json())
      .then((temp) => setTemp(temp.sensors));
    }, []);

    console.log(!temp ? 'NULL' : temp);



    return (
        <>
        
        <Header/>

        <hr class="rounded"></hr>
        
        <p>Welcome to the home page</p>
        <p>Node Proxy Confirmation: {!data ? "Loading..." : data}</p>

        <hr class="rounded"></hr>

        <HumidityIndicator humidity={Number(temp)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator/>

        <hr class="rounded"></hr>

        <TemperatureIndicator/>

        <Footer></Footer>
        
        </>
        
        

        
        );
    }


export default HomePage;