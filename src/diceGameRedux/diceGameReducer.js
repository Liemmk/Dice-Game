import Dice1 from '../assets/img/1.png';
import Dice2 from '../assets/img/2.png';
import Dice3 from '../assets/img/3.png';
import Dice4 from '../assets/img/4.png';
import Dice5 from '../assets/img/5.png';
import Dice6 from '../assets/img/6.png';

const initialState = {
    diceGame: [
        {id:1, src: Dice1, value: 1},
        {id:2, src: Dice2, value: 2},
        {id:3, src: Dice3, value: 3},
    ],
  
    choose: "TÀI",
    totalWin: 0,
    totalPlay: 0,
};

const diceData = [
    {id:1, src: Dice1, value: 1},
    {id:2, src: Dice2, value: 2},
    {id:3, src: Dice3, value: 3},
    {id:4, src: Dice4, value: 4},
    {id:5, src: Dice5, value: 5},
    {id:6, src: Dice6, value: 6},
];

const diceGameReducer = (state= initialState, action) => {
    switch (action.type) {
        case "GAME_CHOOSE": {
            return { ...state, choose: action.dice };
        };
        case "RANDOM_DICE": {
            const diceGame = state.diceGame.map((dice, id) => {
              const randomId = Math.floor(Math.random() * diceData.length);
              return (dice[id] = diceData[randomId]);
            });
            return { ...state, diceGame };
        };
        case "DELAY_DICE": {
            let totalWin = state.totalWin;

            const point = state.diceGame.reduce((total, dice) => {
              return total + dice.value;
            }, 0);
            if (
              (point <= 10 && state.choose === "XỈU") ||
              (point > 10 && state.choose === "TÀI")
            ) {
              totalWin += 1;
            }
      
            return { ...state, totalWin, totalPlay: (state.totalPlay += 1) };
        };

        default:    
            return { ...state };
    }
}

export default diceGameReducer;
