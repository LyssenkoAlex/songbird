import {
  LOAD_BIRDS, SELECT_QUESTION, SELECT_CATEGORY, SCORE_UP, SET_SELECTED_BIRD,
} from '../actions/actions';
import birdsData from '../../birds';

const randomBird = Math.floor(Math.random() * 6);

const initialState = {
  birds: birdsData,
  birdCategory: 0,
  score: 0,
  secretBird: birdsData[0][randomBird],
  selectedBird: birdsData[0][0],
};

function birdsRootReducer(state = initialState, action) {
  const birdsArray = birdsData;
  let selectedBird = '';
  let nextCategory = '';

  console.log('action: ', action);

  switch (action.type) {
    case LOAD_BIRDS:

      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: 0,
        score: state.score,
        selectedBird: state.selectedBird,
      };
    case SELECT_QUESTION:
      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: state.birdCategory,
        score: state.score,
        selectedBird: state.selectedBird,
      };
    case SELECT_CATEGORY:

      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: action.id,
        secretBird: { group: action.id, id: 1 },
        score: state.score,
        selectedBird: state.selectedBird,
      };
    case SCORE_UP:
      selectedBird = birdsData[state.birdCategory].filter(x => x.name === action.name)[0];
      nextCategory = state.birdCategory + 1;
      console.log('selectedBird', selectedBird)
      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: nextCategory,
        secretBird: birdsArray[nextCategory][Math.floor(Math.random() * 6)],
        score: state.score + 1,
        selectedBird,
      };
    case SET_SELECTED_BIRD:

      selectedBird = birdsData[state.birdCategory].filter(x => x.name === action.name)[0];
      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: state.birdCategory,
        secretBird: state.secretBird,
        score: state.score,
        selectedBird,
      };
    default:
      return state;
  }
}

export default birdsRootReducer;
