import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator
} from 'devextreme-react/linear-gauge';

function TemperatureIndicator () {
return (
    <LinearGauge
        id="gauge"
        value={17}
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
