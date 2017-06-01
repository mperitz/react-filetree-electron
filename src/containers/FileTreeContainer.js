import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';

import FileTree from '../components/FileTree';
import { toggleVisibility } from '../reducers/file-tree';
import store from '../store';

const mapState = state => ({ isVisible: state.fileTree.isVisible });

const mapDispatch = dispatch => ({ toggleVisibility: filePath => dispatch(toggleVisibility(filePath)) });

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
