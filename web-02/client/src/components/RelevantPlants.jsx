import React from 'react';


import "../fonts/HammersmithOne-Regular.ttf";

import PlantTile from './tiles/PlantTile';

import './RelevantPlants.css'

function RelevantPlants(props) {
    let labelL = 'Left Sensor';
    let labelR = 'Right Sensor';    

    return (
        <>
        <div className={'three-columns-grid'}>
            <div className={'col1'}><PlantTile type="Col1"/></div>
            <div className={'col2'}><PlantTile type="Col2"/></div>
            <div className={'col3'}><PlantTile type="Col3"/></div>
        </div>
        </>
    );
}

export default RelevantPlants;