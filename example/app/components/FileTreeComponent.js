// eslint-disable class-methods-use-this
import React, { Component } from 'react';

import FileTree from '../../../src/containers/FileTreeContainer';

import { readFile } from '../utils/file-functions';

export default class FileSelector extends Component {
  constructor() {
    super();
    this.state = {
      directory: ''
    };
    this.selectFile = this.selectFile.bind(this);
    this.clickTest = this.clickTest.bind(this);
  }

  componentDidMount() {
    /*eslint-disable react/no-string-refs*/
    this.refs.local.setAttribute('webkitdirectory', true);
    this.refs.local.setAttribute('directory', true);
  }

  selectFile(ev) {
    let directory = ev.target.files[0].path;
    if (directory[directory.length - 1] === '/') directory = directory.slice(0, directory.length - 1);
    this.setState({ directory });
  }

  clickTest(file) {
    return readFile(file.filePath)
    .then(contents => console.log(contents.toString()))
    .catch(console.error.bind(console));
  }

  render() {
    return (
      <div>
        <input id="file-selector" type="file" ref="local" onChange={this.selectFile} />
        {<FileTree
          directory={this.state.directory}
          onFileClick={this.clickTest}
          directoryTheme="dark"
        />}
      </div>
    );
  }
}
