import React from 'react';

// import MaterialLayout from './components/MaterialLayout';

import Header from '../components/pageFormat/Header';

import Footer from '../components/pageFormat/Footer';

// import './HomePage2.css';

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';
import TemperatureIndicator from '../components/TemperatureIndicator';
import Layout from '../components/Layout';
import HorizontalLayout from '../components/HorizontalLayout';
import HorizontalLayoutNav from '../components/HorizontalLayoutNav';
import DigitalTemp from '../components/DigitalTemp';
import PlantTile from '../components/tiles/PlantTile';
import RelevantPlants from '../components/RelevantPlants';

import GetData from '../async/GetData';
import GetData2 from '../async/GetData2';
import GetDebugData from '../async/GetDebugData';
import SeasonsDisplay from '../components/SeasonsDisplay';
import SeasonsDisplayDay from '../components/SeasonsDisplayDay';


let view1 = true;

let view2 = false;

// function GetData() {

//     const [data, setData] = React.useState(null);

//     const [vals, setVals] = React.useState({});

//     const [plantvals, setPlantVals] = React.useState({});

//     React.useEffect(() => {
//       async function fetchStatus() {
//         const response = await fetch("/api");
//         const json = await response.json();
//         setData(json.message);
//       }

//       async function fetchSensors() {
//         const response = await fetch("/sensors");
//         const json = await response.json();
//         setVals(json);
//       }

//       async function fetchBestMatch() {
//         const response = await fetch("/get-best-match");
//         const json = await response.json();
//         setPlantVals(json);
//       }
//       fetchStatus();
//       fetchSensors();
//       fetchBestMatch();
//     } , []);

//     return {data, vals, plantvals};


// }


function HomePage3(){

    let {data, vals, plantvals} = GetDebugData();
    
    // const [data, setData] = React.useState(null);

    // const [vals, setVals] = React.useState({});

    // const [plantvals, setPlantVals] = React.useState({});

    // React.useEffect(() => {
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.message))
      
    // fetch("/sensors")
    //   .then((res) => res.json())
    //   .then((vals) => setVals(vals))
    
    // fetch("/get-best-match")
    //   .then((res) => res.json())
    //   .then((plantvals) => setPlantVals({items: plantvals}))
    // }, []);

    
    console.log(vals)

    if(view1) {    

    return (
        <>
        
        <HorizontalLayoutNav/>

        {/* <hr class="rounded-top"></hr> */}

        <HumidityIndicator sensor={2} humidity={Number(vals.rh)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator moisture={Number(vals.sm)}/>

        <hr class="rounded"></hr>

        <SeasonsDisplayDay/>

        <hr class="rounded"></hr>

        <DigitalTemp temp={Number(vals.tmp)}/>

        <hr class="rounded"></hr>
        
        <RelevantPlants plantvals={plantvals}/>


        </>
        
        );
    } else if(view2) {

      //other view 

    }
    }


export default HomePage3;