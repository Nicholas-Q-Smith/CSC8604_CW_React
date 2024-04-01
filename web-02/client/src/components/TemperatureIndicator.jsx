import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, ValueIndicator
} from 'devextreme-react/linear-gauge';

/* Older sensor, but left in for 
*  demonstration purposes in case 
   of future use
*/


/*
Component for displaying temperature data in a linear guage.
*/

function TemperatureIndicator (props) {
return (
    <LinearGauge
        id="gauge"
        value={props.temp}
    >

    <ValueIndicator
        color={"#00FF00"} // Hex color for green
    />

        <Scale
            startValue={0}
            endValue={45}
            tickInterval={5}
            minorTickInterval={0.625}
        >


        
        <MinorTick visible={true} />

        </Scale>

        <Export enabled={false} />

        <Title text="Temperature">
            <Font size={28} />
        </Title>
        
    </LinearGauge>
);
}

export default TemperatureIndicator;
