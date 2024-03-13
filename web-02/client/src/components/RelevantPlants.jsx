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
            <div className={'col1'}>Column 1</div>
            <div className={'col2'}>Column 2</div>
            <div className={'col3'}>Column 3</div>
        </div>
        </>
    );
}

export default RelevantPlants;