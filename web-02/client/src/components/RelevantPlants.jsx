import React from 'react';


import "../fonts/HammersmithOne-Regular.ttf";

import PlantTile from './tiles/PlantTile';

import './RelevantPlants.css'
import { Color } from 'devextreme-react/cjs/linear-gauge';
import HomePage from '../iteration-02/HomePageNew';
import HomePageNew from '../iteration-02/HomePageNew';

import GetData from '../async/GetData';
// import GetData from HomePageNew;

function RelevantPlants(props) {

    
    let {data, vals, plantvals} = GetData();
    
    console.log(plantvals)
 

    let labelL = 'Left Sensor';
    let labelR = 'Right Sensor';
    
    

    let plantsList = [];
    console.log(plantvals);
    

    let i = 0;
    for (let element in plantvals.items) {
        plantsList.push(<PlantTile typ={plantvals.items[i].type}
        examples={plantvals.items[i].examples} 
        struct={plantvals.items[i].struct} 
        pH={plantvals.items[i].pH}
        light={plantvals.items[i].light}/>);
        console.log(plantvals.items[i])
        i++
    }

    console.log(plantsList);

    return (
        <>
        <p style={{color: '#21437D'}} className={'header'}>Best Matching Plants</p>
        <div>
            {plantsList}
        </div>
        {/* <div className={'three-columns-grid'}>
            <div className={'col1'}><PlantTile typ="Col1"/></div>
            <div className={'col2'}><PlantTile typ="Col2"/></div>
            <div className={'col3'}><PlantTile typ="Col3"/></div>
        </div> */}
        </>
    );
}

export default RelevantPlants;