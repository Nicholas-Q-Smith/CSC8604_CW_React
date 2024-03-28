import React from "react";

import HorizontalLayoutNav from "../components/HorizontalLayoutNav";
import Graph from "../components/Graph";
import GraphView from "../components/Graph";

import Dropdown from 'react-dropdown';

import './GraphPage.css';

export default function GraphPage() {
    
    let activeTab = 1;

    const [value, setValue] = React.useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    
    // if(window.location.pathname == "/sensors1") {
    //     activeTab = 1;
    // } else if(window.location.pathname == "/sensors2") {
    //     activeTab = 2;
    // }

    return (
        <>
            <HorizontalLayoutNav/>
            <div>
            <div class={'dropDown'}>

            <select style={{width: '400px', height: '100px'}} value={value} onChange={handleChange}>

            <option value={1}>Plot 1 Graphs</option>

            <option value={2}>Plot 2 Graphs</option>

            </select>

            </div>
            <div class={'graphContainer'}>
            <Graph activeTab={Number(value)}></Graph>
            </div>
            </div>
        </>

    )
} 