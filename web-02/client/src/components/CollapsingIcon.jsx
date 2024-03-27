import React from "react";

import { Renderer, render, } from "react-dom";

import collapsed from "../assets/icons/compress.png";

import expanded from "../assets/icons/expand.png";

import './CollapsingIcon.css';

export default function CollapsingIcon(isItCollapsed) {


    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    
    if(isItCollapsed == true) {
        forceUpdate();

        return (
            <> 
            
               <img className={'expand'} src={expanded}/>
                {/* {isCollapsed && <img src={collapsed} />} */}
                
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