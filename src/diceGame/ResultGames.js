import React, { Component } from 'react';
import {connect} from 'react-redux';

class ResultGames extends Component {
  render() {
    const {choose, totalWin, totalPlay, onRandom, onDelay } = this.props;
    
    return (
      <div className="d-flex justify-content-center flex-column align-items-center mb-3">
        <h1>BẠN CHỌN: <span className="text-danger">{choose}</span></h1>
        <p className='fs-4'>Số bàn thắng: <span className="text-success">{totalWin}</span></p>
        <p className='fs-4'>Tổng số bàn chơi: <span className="text-primary">{totalPlay}</span></p>
        <button 
            className='btn btn-success' 
            onClick={() =>{ const intervalId = setInterval(() => {
              onRandom();
            });
        
            setTimeout(() => {clearInterval(intervalId);
            onDelay();
            }, 1000);
          }}
          
            >
              Play Game
            </button>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    choose: state.diceGameReducer.choose,
    totalWin: state.diceGameReducer.totalWin,
    totalPlay: state.diceGameReducer.totalPlay,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelay: () => {
      const action = { type: "DELAY_DICE" };
      dispatch(action);
    },
    onRandom: () => {
      const action = { type: "RANDOM_DICE" };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultGames);
