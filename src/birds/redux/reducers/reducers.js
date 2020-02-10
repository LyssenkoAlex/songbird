import {
  SCORE_UP, SET_SELECTED_BIRD, NEXT_LEVEL,
} from '../actions/actions';
import birdsData from '../../birds';

const randomBird = Math.floor(Math.random() * 6);

const initialState = {
  birds: birdsData,
  birdCategory: 0,
  score: 0,
  secretBird: birdsData[0][randomBird],
  selectedBird: birdsData[0][0],
  attemptCount: 0,
  guessed: false,
  gameOver: false,
  birdGroup: birdsData[0],
};

function birdsRootReducer(state = initialState, action) {
  const birdsArray = birdsData;
  let selectedBird = '';
  let nextCategory = '';

  console.log('action: ', action);

  switch (action.type) {
    case SCORE_UP:
      state.birdGroup.filter(x => x.name === action.name)[0].style = 'success';
      state.birdGroup.filter(x => x.name === action.name)[0].answered = true;


      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: state.birdCategory,
        secretBird: state.secretBird,
        score: state.score + 5 - state.attemptCount,
        selectedBird: birdsData[state.birdCategory].filter(x => x.name === action.name)[0],
        attemptCount: state.attemptCount,
        guessed: true,
        birdGroup: [...state.birdGroup],
      };
    case SET_SELECTED_BIRD:

      selectedBird = birdsData[state.birdCategory].filter(x => x.name === action.name)[0];
      state.birdGroup.filter(x => x.name === action.name)[0].style = 'error';
      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: state.birdCategory,
        secretBird: state.secretBird,
        score: state.score,
        selectedBird,
        attemptCount: state.attemptCount += 1,
        guessed: false,
        birdGroup: [...state.birdGroup],

      };
    case NEXT_LEVEL:

      nextCategory = state.birdCategory + 1;
      if (state.birds.length === nextCategory) {
        state.gameOver = true;
        nextCategory = 0;
      }
      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: nextCategory,
        secretBird: birdsArray[nextCategory][Math.floor(Math.random() * 6)],
        score: state.score,
        selectedBird,
        attemptCount: 0,
        guessed: false,
        gameOver: state.gameOver,
        birdGroup: [...birdsArray[nextCategory]],
      };
    default:
      return state;
  }
}

export default birdsRootReducer;
