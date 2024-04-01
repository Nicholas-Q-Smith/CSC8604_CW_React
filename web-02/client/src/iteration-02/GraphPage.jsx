import React from "react";

import HorizontalLayoutNav from "../components/HorizontalLayoutNav";
import Graph from "../components/Graph";


import './GraphPage.css';

/* Page displaying graph components
passing the active tab to the graph component
to determine which graph to display.
This presently does not automatically 
detect the number of graphs to display,
but determines it from the dropdown menu.
Utilisation of React router 
to determine which graph to display will 
be implemented in the future.
*/

export default function GraphPage() {
    
    //Default state is 1.

    const [value, setValue] = React.useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

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