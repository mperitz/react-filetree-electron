import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';

import FileTree from '../components/FileTree';
import { toggleVisibility, openDirectory } from '../reducers/file-tree';
import store from '../store';

const mapState = state => ({
  isVisible: state.fileTree.isVisible,
  openedDirectories: state.fileTree.openedDirectories
});

const mapDispatch = dispatch => ({
  toggleVisibility: filePath => dispatch(toggleVisibility(filePath)),
  dispatchOpenDirectory: (filePath, files) => dispatch(openDirectory(filePath, files))
});

const ConnectFileTree = connect(mapState, mapDispatch)(FileTree);

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectFileTree {...this.props} />
      </Provider>
    );
  }
}
