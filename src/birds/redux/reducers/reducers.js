import {
  LOAD_BIRDS, SELECT_QUESTION, SELECT_CATEGORY, SCORE_UP, SET_SELECTED_BIRD,
} from '../actions/actions';
import birdsData from '../../birds';


const initialState = {
  birds: birdsData,
  birdCategory: 0,
  score: 0,
  secretBird: { group: 0, id: 1 },
  selectedBird: birdsData[0][0],
};

function birdsRootReducer(state = initialState, action) {
  const birdsArray = birdsData;
  console.log('action: ', action)
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
      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: state.birdCategory,
        secretBird: { group: state.secretBird.group, id: state.secretBird.id + 1 },
        score: state.score + 1,
        selectedBird: state.selectedBird,
      };
    case SET_SELECTED_BIRD:

      return {
        birds: [
          ...birdsArray,
        ],
        birdCategory: state.birdCategory,
        secretBird: { group: state.secretBird.group, id: state.secretBird.id + 1 },
        score: state.score + 1,
        selectedBird: birdsData[action.category][action.id],
      };
    default:
      return state;
  }
}

export default birdsRootReducer;
