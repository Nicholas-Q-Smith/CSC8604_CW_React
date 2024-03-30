import React from "react";

import { Renderer, render, } from "react-dom";

import collapsed from "../assets/icons/compress.png";

import expanded from "../assets/icons/expand.png";

import './CollapsingIcon.css';

/*
CollapsingIcon component to be used in PlantTile.jsx, displaying
whether the collapsible item is collapsed or expanded
As of final iteration, it does not work and it was not a priority 
to fix. However, it is a simple component that can be fixed with
further work when time allows in the future.
*/

export default function CollapsingIcon(isItCollapsed) {

    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    
    //Checks if the element is collapsed or expanded
    if(isItCollapsed == true) {
        forceUpdate();

        //Returns element depending on state - utilising css classes 
        //collapse or expand
        return (
            <> 
               <img className={'expand'} src={expanded}/>                
            </>
        );
    } else {
        
        return (
            <>
                <img className={'collapse'} src={collapsed}/>
            </>
        );
    }
    
}