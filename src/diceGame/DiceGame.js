import React, { Component } from 'react';
import Game from './Game';
import ResultGames from './ResultGames';
import bgGame from '../assets/img/bgGame.png';

const styles = {
    paperContainer: {
        backgroundImage: `url(${bgGame})`,
        height: "100vh",
    }
};

export default class DiceGame extends Component {
    render() {
        return (
            <div 
                style={styles.paperContainer}
                className="d-flex align-items-center justify-content-center">
                <div className='container'>
                    <h1 className='mb-5 fs-1'>GAME ĐỔ XÚC XẮC</h1>
                    <Game />
                    <ResultGames />
                </div>
            </div>
        )
    };
};
