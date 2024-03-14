import React from 'react';
import './DigitalTemp.css';

import "../fonts/HammersmithOne-Regular.ttf";



function DigitalTemp(props) {
    let labelL = 'Left Sensor';
    let labelR = 'Right Sensor';    

    return (
        <>
        <div className="two-columns-grid">
        <div className={'tempBoxL'}>
        <p className={'sensorLocL'}>{labelL}</p>
        <p style={{color: '#21437D'}} className={'tempIndicL'}>{props.temp}°</p>
        </div>
        <div className={'tempBoxR'}>
        <p className={'sensorLocR'}>{labelR}</p>
        <p style={{color: '#21437D'}} className={'tempIndicR'}>{props.temp}°</p>
        </div>
        </div>
        </>
    );
}

export default DigitalTemp;