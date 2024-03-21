import React from 'react';

import Collapsible from 'react-collapsible';

import './PlantTile.css';

// import brassicas from '../../assets/plant-tiles/plot shapes-11.png';

// import root_veg from '../../assets/plant-tiles/plot shapes-10.png';

// import leafy_greens from '../../assets/plant-tiles/plot shapes-07.png';

// import legumes from '../../assets/plant-tiles/plot shapes-07.png';

// import fruiting_veg from '../../assets/plant-tiles/plot shapes-09.png';

// import alliums from '../../assets/plant-tiles/plot shapes-12.png';

// import herbs from '../../assets/plant-tiles/plot shapes-08.png';

// import berries from '../../assets/plant-tiles/plot shapes-06.png';

// import flowers from '../../assets/plant-tiles/plot shapes-05.png';


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




let logos = {'Root Vegetables': root_veg,
            'Leafy Greens': leafy_greens,
            'Legumes': legumes,
            'Fruiting Vegetables': fruiting_veg,
            'Brassicas': brassicas,
            'Alliums': alliums,
            'Herbs': herbs,
            'Berries': berries,
            'Flowers (Edible and Ornamental)': flowers};


            

function InvertCollapse() {


}

function PlantTile(props) {
    
    let typ = props.typ;

    console.log(typ)

    let examples = props.examples;

    let struct = props.struct;

    let pH = props.pH;

    let light = props.light;

    let subitems = [];

    console.log(examples[0]);

    

    for(let index = 0; index < examples.length; index++) {
        console.log(examples[index]);
        subitems.push(<p>{examples[index]}</p>);
    }
    // console.log(JSON.parse(examples));

    // for (let i = 0; i < examples.length; i++) {
    //     subitems.push(<p>{examples[i]}</p>);
    // }
    console.log(logos[typ]);
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
                                    {/* <img class={'toggle_icon'} src={expand}/> */}
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

export default PlantTile;