import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator,
} from 'devextreme-react/linear-gauge';

import '../font.css';

function SeasonsDisplay () {

    const d = new Date();

    let month = d.getMonth();

    

    const currentMonthLabel = new Date().toLocaleString('en-US', { month: 'long' });
    console.log(currentMonthLabel);

    let season = undefined;

    if(month < 2 || month == 11 || month == 12) {
        season = 'Winter';
    } else if(month >= 2 && month < 5) {
        season = 'Spring';
    } else if(month >= 5 && month < 9) {
        season = 'Summer';
    } else if(month >= 9 && month < 11) {
        season = 'August';
    }
    
    
    






    return (
        <LinearGauge
            id="gauge"
            value={month}
        >

        <ValueIndicator color={"black"}/>
            <Scale
                startValue={0}
                endValue={12}
                tickInterval={1}
                minorTickInterval={0.625}
            >


            
                <MinorTick visible={true} />
            </Scale>
            <Export enabled={false} />
            <Title text={"Season: " + season}>
                <Font size={28} family='Julius Sans One' />
            </Title>
        </LinearGauge>
    );
    }

export default SeasonsDisplay;
