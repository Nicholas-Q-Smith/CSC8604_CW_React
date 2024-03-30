import React from 'react';

import { useNavigate, Route, Routes } from "react-router-dom";



import './Home.css';

import './fonts/JuliusSansOne-Regular.ttf';
    
   

// const NavigateToService1 = () => {
    
//     navigate('layout1');
// }


function Home(){
    
    let navigate = useNavigate();

    return (
        <>
        <div class="container">
            <img src={require('./assets/plot-shapes/plot shapes-01.png')} alt="Image 1" className="image"
            onClick={() => navigate('sensors1')}/>
            <img src={require('./assets/plot-shapes/plot shapes-02.png')} alt="Image 2" class="image"
            onClick={() => navigate('sensors2')}/>
            {/* <img src={require('./assets/plot shapes-03.png')} alt="Image 3" class="image"
            onClick={() => navigate('layout3')}/>
            <img src={require('./assets/plot shapes-04.png')} alt="Image 4" class="image"
            onClick={() => navigate('layout1')}/> */}
        </div>
        </>
        );
    }

function LoadPlot(plotNo) {
    

}


export default Home;