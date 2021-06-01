import React from 'react';
import './Home.css';
import pizza from './pizza.png';

const Home = () => {
    return(
        <React.Fragment>
            <h1>Strona główna</h1>
            <p>Witaj w Pizzerii PIWa</p>
            <img src={pizza} className="app-logo" />
        </React.Fragment>
    );
}

export default Home;