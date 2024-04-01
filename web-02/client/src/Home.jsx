import React from 'react';

import { useNavigate } from "react-router-dom";

import './Home.css';

import './fonts/JuliusSansOne-Regular.ttf';
    
/*The root page of the application, 
allowing navigation to the different plot
pages of the application.

Uses useNavigate to navigate to the different
plot pages.
*/

function Home(){
    
    let navigate = useNavigate();

    return (
        <>
        <div class="container">
            <img src={require('./assets/plot-shapes/plot shapes-01.png')} alt="Image 1" className="image"
            onClick={() => navigate('sensors1')}/>
            <img src={require('./assets/plot-shapes/plot shapes-02.png')} alt="Image 2" class="image"
            onClick={() => navigate('sensors2')}/>
        </div>
        </>
        );
    }

export default Home;