const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
const OPEN_DIRECTORY = 'OPEN_DIRECTORY'

const initialState = {
  isVisible: {},
  openedDirectories: {}
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      newState.isVisible = Object.assign({}, newState.isVisible);
      newState.isVisible[action.filePath] = !newState.isVisible[action.filePath];
      break;
    case OPEN_DIRECTORY:
      newState.openedDirectories = Object.assign({}, newState.openedDirectories, { [action.filePath]: action.files });
      break;
    default:
      return state;
  }
  return newState;
};

export default reducer;

export const toggleVisibility = filePath => ({ type: TOGGLE_VISIBILITY, filePath });

export const openDirectory = (filePath, files) => ({ type: OPEN_DIRECTORY, filePath, files });
