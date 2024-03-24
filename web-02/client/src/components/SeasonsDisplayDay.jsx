import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator, Tick,
} from 'devextreme-react/linear-gauge';

import '../font.css';

function SeasonsDisplayDay () {

    const d = new Date();

    let month = d.getMonth();
    

    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    

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
            value={day}
        >
        <MinorTick visible={false} />

        <Tick visible={false} />

        <Label visible={false} />

        <ValueIndicator color={"black"}/>
            <Scale
                visible={false}
                
                startValue={0}
                endValue={365}
                tickInterval={30}
                // minorTickInterval={0.625}
                minorTick={false}
                majorTick={false}
                
            >

                
                <Tick visible={false} />
                
            </Scale>
            <Export enabled={false} />
            <Title text={"Season: " + season}>
                <Font size={28} family='Julius Sans One' />
            </Title>
        </LinearGauge>
    );
    }

export default SeasonsDisplayDay;
