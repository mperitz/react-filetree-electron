const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

const initialState = {
  isVisible: {}
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      newState.isVisible = Object.assign({}, newState.isVisible);
      newState.isVisible[action.filePath] = !newState.isVisible[action.filePath];
      break;
    default:
      return state;
  }
  return newState;
};

export default reducer;

export const toggleVisibility = filePath => ({ type: TOGGLE_VISIBILITY, filePath });
