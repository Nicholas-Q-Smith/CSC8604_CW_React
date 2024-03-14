import React from 'react';


import "../fonts/HammersmithOne-Regular.ttf";

import PlantTile from './tiles/PlantTile';

import './RelevantPlants.css'
import { Color } from 'devextreme-react/cjs/linear-gauge';

function RelevantPlants(props) {
    let labelL = 'Left Sensor';
    let labelR = 'Right Sensor';    

    return (
        <>
        <p style={{color: '#21437D'}} className={'header'}>Best Matching Plants</p>
        <div className={'three-columns-grid'}>
            <div className={'col1'}><PlantTile type="Col1"/></div>
            <div className={'col2'}><PlantTile type="Col2"/></div>
            <div className={'col3'}><PlantTile type="Col3"/></div>
        </div>
        <div className={'three-columns-grid'}>
            <div className={'col1'}><PlantTile type="Col1"/></div>
            <div className={'col2'}><PlantTile type="Col2"/></div>
            <div className={'col3'}><PlantTile type="Col3"/></div>
        </div>
        </>
    );
}

export default RelevantPlants;