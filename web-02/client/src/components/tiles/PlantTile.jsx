import React from 'react';

import Collapsible from 'react-collapsible';

import './PlantTile.css';

import brassicas from '../../assets/plant-tiles/plot shapes-11.png';

import root_veg from '../../assets/plant-tiles/plot shapes-10.png';

import leafy_greens from '../../assets/plant-tiles/plot shapes-07.png';

import legumes from '../../assets/plant-tiles/plot shapes-07.png';

import fruiting_veg from '../../assets/plant-tiles/plot shapes-09.png';

import alliums from '../../assets/plant-tiles/plot shapes-12.png';

import herbs from '../../assets/plant-tiles/plot shapes-08.png';

import berries from '../../assets/plant-tiles/plot shapes-06.png';

import flowers from '../../assets/plant-tiles/plot shapes-05.png';




let logos = {'Root Vegetables': root_veg,
            'Leafy Greens': leafy_greens,
            'Legumes': legumes,
            'Fruiting Vegetables': fruiting_veg,
            'Brassicas': brassicas,
            'Alliums': alliums,
            'Herbs': herbs,
            'Berries': berries,
            'Flowers (Edible and Ornamental)': flowers};

            

function PlantTile(props) {
    
    let typ = props.typ;

    let examples = props.examples;

    let struct = props.struct;

    let pH = props.pH;

    let light = props.light;


    return (
        <>
        <div className={'container'}>
        <img src={logos[typ]} alt="Image 1" className="type_image"/>
        <p>{typ}</p>
        <Collapsible className={'collapsabletab'} trigger="Example Plants">
            <p>{examples}</p>
        </Collapsible>
        <p>{struct}</p>
        <p>{pH}</p>
        <p>{light}</p>
        </div>
        </>
    );
}

export default PlantTile;