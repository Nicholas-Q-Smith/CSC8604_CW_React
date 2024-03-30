import React from 'react';

//use of Collapsible for collapsible item for each plant tile

import Collapsible from 'react-collapsible';

//stylesheet import

import './PlantTile.css';

//imports for all plant logos

import brassicas from '../../assets/plant-tiles-new/brassicas.png';

import root_veg from '../../assets/plant-tiles-new/carrot.png';

import leafy_greens from '../../assets/plant-tiles-new/leafy greens.png';

import legumes from '../../assets/plant-tiles-new/carrot.png';

import fruiting_veg from '../../assets/plant-tiles-new/tomato.png';

import alliums from '../../assets/plant-tiles-new/onion.png';

import herbs from '../../assets/plant-tiles-new/herbs.png';

import berries from '../../assets/plant-tiles-new/apple.png';

import flowers from '../../assets/plant-tiles-new/flowers.png';

import expand from '../../assets/icons/expand.png';

import collapse from '../../assets/icons/compress.png';

import CollapsingIcon from '../CollapsingIcon';


/* Mapping of plant name strings to each logo
When utilising a DBMS in a later iteration, this will possibly be 
replaced witheither a query or at the very least a primary key to 
ensure integrity, but a string name is more than sufficient for this
example system, allowing for easy access to the correct logos.
*/

let logos = {'Root Vegetables': root_veg,
            'Leafy Greens': leafy_greens,
            'Legumes': legumes,
            'Fruiting Vegetables': fruiting_veg,
            'Brassicas': brassicas,
            'Alliums': alliums,
            'Herbs': herbs,
            'Berries': berries,
            'Flowers (Edible and Ornamental)': flowers};

/*Main function, defining a plant tile component with props
 of each plant type, examples, structure, pH and light requirements
*/

function PlantTile(props) {
    
    let typ = props.typ;

    let examples = props.examples;

    let struct = props.struct;

    let pH = props.pH;

    let light = props.light;

    let subitems = [];

    //Iterating through examples to create a list of example plants
    for(let index = 0; index < examples.length; index++) {
        subitems.push(<p>{examples[index]}</p>);
    }
    

    //Returning the plant tile component with all the necessary information
    return (
        <>
        <div className={'plant_component'}>
        <div className={'title_logo'}>
            <div className={"two_column_layout"}>
                <div className={'element1'}>
                    <img src={logos[typ]} alt="Image 1" className="type_image"/>
                </div>
                <div className={'element2'}>
                    <div className={"two_column_layout"}>
                        <div className={'left'}>
                            <Collapsible className={'plant_tile_head'} trigger={
                            <>
                            <div className={"two_column_layout"}>
                                <div className={"left"}>
                                    <p className={"expandLabel"}>{typ}</p>
                                    </div>
                                <div className={"right"}>
                                    <CollapsingIcon isCollapsed={InvertCollapse()}/>
                                </div>
                                    </div>
                                    <div>
                                    <img/>
                                    </div></>}>
                        
                            <Collapsible className={'collapsabletab'} trigger="Example Plants">
                            <p>{subitems}</p>
                        </Collapsible>
                        
                    <div className={'two_column_layout'}>
                        <div className={'bm_left'}>
                            <p>Soil:</p>
                            <p>pH:</p> 
                            <p>Sunlight:</p> 
                        </div>
                        <div className={'bm_right'}>
                            <p>{struct}</p>
                            <p>{pH}</p>
                            <p>{light}</p>
                        </div>
                    </div>
                        </Collapsible>
                    </div>
                    <div className={'right'}>   
                    </div>
                </div>
            </div>
        </div>  
    </div>
</div>
</>
    );
}

function InvertCollapse() {
    return true;
}

export default PlantTile;