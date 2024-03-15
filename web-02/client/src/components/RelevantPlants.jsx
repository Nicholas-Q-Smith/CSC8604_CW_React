import React from 'react';


import "../fonts/HammersmithOne-Regular.ttf";

import PlantTile from './tiles/PlantTile';

import './RelevantPlants.css'
import { Color } from 'devextreme-react/cjs/linear-gauge';

function RelevantPlants(props) {

    const [data, setData] = React.useState(null);

    const [vals, setVals] = React.useState({});

    React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      
    fetch("/get-best-match")
      .then((res) => res.json())
      .then((vals) => setVals({items: vals}))
    }, []);


    let labelL = 'Left Sensor';
    let labelR = 'Right Sensor';
    
    let plantsList = [];
    console.log(vals);
    //console.log(vals[0].type);

    let i = 0;
    for (let element in vals.items) {
        plantsList.push(<PlantTile typ={vals.items[i].type}
        examples={vals.items[i].examples} 
        struct={vals.items[i].struct} 
        pH={vals.items[i].pH}
        light={vals.items[i].light}/>);
        i++
    }



    //  console.log("Client side values " + plantsList[1].toString());
   
    // for (let i = 0; i < vals.items.length; i++) {
    //     console.log("Client side values " + vals.items[i].type);
    // }


    return (
        <>
        <p style={{color: '#21437D'}} className={'header'}>Best Matching Plants</p>
        <div className={'three-columns-grid'}>
            {plantsList[0]}
            {plantsList[1]}
            {plantsList[2]}
        </div>
        {/* <div className={'three-columns-grid'}>
            <div className={'col1'}><PlantTile typ="Col1"/></div>
            <div className={'col2'}><PlantTile typ="Col2"/></div>
            <div className={'col3'}><PlantTile typ="Col3"/></div>
        </div> */}
        </>
    );
}

export default RelevantPlants;