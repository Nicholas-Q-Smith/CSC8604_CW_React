import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator,
} from 'devextreme-react/linear-gauge';

import '../font.css';

function SoilMoistureIndicator (props) {

    let colour = '#000000';

    if(props.moisture < 20) {
        colour = '#fa3f32';
    } else if(props.moisture <= 50) {
        colour = '#f7b731';
    } else if(props.moisture <= 75) {
        colour = '#b3ff00';
    } else if(props.moisture <= 100) {
        colour = '#00c417';
    }
    

    return (
        <LinearGauge
            id="gauge"
            value={props.moisture}
        >

        <ValueIndicator color={colour} />
            <Scale
                startValue={0}
                endValue={100}
                tickInterval={5}
                minorTickInterval={0.625}
            >


            
                <MinorTick visible={true} />
            </Scale>
            <Export enabled={false} />
            <Title text={"Soil Moisture: " + props.moisture + "%"}>
                <Font size={28} family='Julius Sans One' />
            </Title>
        </LinearGauge>
    );
    }

export default SoilMoistureIndicator;
