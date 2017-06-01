import { connect } from 'react-redux';

import FileTree from '../components/FileTree';
import { toggleVisibility } from '../reducers/file-tree';

const mapState = state => ({ isVisible: state.fileTree.isVisible });

const mapDispatch = dispatch => ({ toggleVisibility: filePath => dispatch(toggleVisibility(filePath)) });

export default connect(mapState, mapDispatch)(FileTree);
