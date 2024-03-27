import React from 'react';

import Header from '../components/pageFormat/Header';

import Footer from '../components/pageFormat/Footer';

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

function HomePage3(){

    let {data, vals, plantvals} = GetDebugData();
        
    console.log(vals)

    if(view1) {    

    return (
        <>
        
        <HorizontalLayoutNav/>

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