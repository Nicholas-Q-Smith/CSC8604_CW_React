import React from 'react';

import "../fonts/HammersmithOne-Regular.ttf";

import PlantTile from './tiles/PlantTile';

import './RelevantPlants.css'

/*
Returns the Plant Tiles from passed props
via their type string name
This matches to each individual plant tile
It will work via ID / primary key in a 
more finalised system.
*/

function RelevantPlants(props) {

    let plantvals = props.plantvals;
    
    let plantsList = [];

    let i = 0;

    /*Pushes each plant tile to the list
    mapping their attributes to each PlantTile
    child component, formatted into a
    JSX list of PlantTile components
    */
    for (let element in plantvals.items) {
        plantsList.push(<PlantTile typ={plantvals.items[i].type}
        examples={plantvals.items[i].examples} 
        struct={plantvals.items[i].struct} 
        pH={plantvals.items[i].pH}
        light={plantvals.items[i].light}/>);
        console.log(plantvals.items[i])
        i++
    }

    /* Return this list of PlantTile components
    */
    return (
        <>
        <p style={{color: '#21437D'}} className={'header'}>Best Matching Plants</p>
        <div>
            {plantsList}
        </div>
        </>
    );
}

export default RelevantPlants;