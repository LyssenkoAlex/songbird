export const LOAD_BIRDS = 'LOAD_BIRDS';
export const SELECT_QUESTION = 'SELECT_QUESTION ';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SCORE_UP = 'SCORE_UP';
export const SET_SELECTED_BIRD = 'SET_SELECTED_BIRD';


export function selectQuestion(id) {
  return { type: SELECT_QUESTION, id };
}

export function selectCategory(id) {
  return { type: SELECT_CATEGORY, id };
}

export function setSelectedBird({ category, id }) {
  return { type: SET_SELECTED_BIRD, category, id }
}

export function scoreUp() {
  return { type: SCORE_UP };
}
