import React, { Component } from 'react';
import {connect} from 'react-redux';

class Game extends Component {
  render() {
    const {diceGames, onChoose} = this.props;
    return (
        <div>
        <div className="row mb-5 text-center ">
          <div className="col-3">
            <button className="btn btn-primary p-4" onClick={() => onChoose("TÀI")}>
              <h1>Tài</h1>
            </button>
          </div>
          <div className="col-6">
            {diceGames.map((dice, id) => (
              <img
                key={id}
                src={dice.src}
                alt={dice.src}
                width={40}
                height={40}
              />
            ))}
          </div>
          <div className="col-3">
            <button className="btn btn-primary p-4" onClick={() => onChoose("XỈU")}>
              <h1>Xỉu</h1>
            </button>
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
    return {
        diceGames: state.diceGameReducer.diceGame,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
      onChoose: (dice) => {
        const action = { type: "GAME_CHOOSE", dice };
        dispatch(action);
      },
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Game);