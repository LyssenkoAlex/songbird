export const LOAD_BIRDS = 'LOAD_BIRDS';
export const SELECT_QUESTION = 'SELECT_QUESTION ';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SCORE_UP = 'SCORE_UP';
export const SET_SELECTED_BIRD = 'SET_SELECTED_BIRD';
export const NEXT_LEVEL = 'NEXT_LEVEL';


export function selectQuestion(id) {
  return { type: SELECT_QUESTION, id };
}

export function selectCategory(id) {
  return { type: SELECT_CATEGORY, id };
}

export function setSelectedBird(name) {
  return { type: SET_SELECTED_BIRD, name }
}

export function scoreUp(name) {
  return { type: SCORE_UP, name };
}

export function nextLevel() {
  return { type: NEXT_LEVEL }
}
