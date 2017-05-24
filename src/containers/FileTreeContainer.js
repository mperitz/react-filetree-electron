import { connect } from 'react-redux';

import FileTree from '../components/FileTree';
import toggleVisibility from '../reducers/file-tree';

const mapState = state => {
  return {
    isVisible: state.fileTree.isVisible
  };
};

const mapDispatch = dispatch => {
  return {
    toggleVisibility: filePath => dispatch(toggleVisibility(filePath))
  };
};

export default connect(mapState, mapDispatch)(FileTree);
