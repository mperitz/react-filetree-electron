import React, { Component } from 'react';

import Directory from './Directory';
import File from './File';
import { getAllFiles } from '../utils/file-functions';
import { deleteNonFontAwesomeKeys } from '../utils/helpers';
import defaultStyles from '../utils/defaultStyles';

import '../utils/app.global.css';

/*
QUESTIONS:
1. How do I change this from this app to an npm module?
    - Do I include my tests?
    - How does npm work?
    * npm publish
    * configure package json
*/

export default class FileTree extends Component {
  constructor() {
    super();
    this.state = {
      files: this.props ? this.props.files : []
    };
    this.setVisibility = this.setVisibility.bind(this);
    this.onFileClick = this.onFileClick.bind(this);
  }

  componentDidMount() {
    return this.props.directory && this.props.directory.length &&
    getAllFiles(this.props.directory)
    .then(files => this.setState({ files }))
    .catch(console.error);
  }

  componentWillReceiveProps({ directory }) {
    return directory && getAllFiles(directory)
    .then(files => this.setState({ files }))
    .catch(console.error);
  }

  setVisibility(filePath) {
    this.props.toggleVisibility(filePath);
  }

  onFileClick(file) {
    this.props.onFileClick && this.props.onFileClick(file);
  }

  render() {
    const files = this.state.files;

    const styles = {
      fileTree: {
        listStyle: 'none',
        ...this.props.fileTreeStyle
      },
      directory: {
        ...this.props.directoryStyle
      },
      file: {
        ...this.props.fileStyle
      }
    };

    // FontAwesome component in Icon component will throw an error if it doesn't recognize a property name.
    // The following code deletes foreign properties to pass down to the Icon component.
    const fontAwesomeProps = deleteNonFontAwesomeKeys(this.props);
    const fileTreeStyle = this.props.fileTreeStyle ? styles.fileTree : defaultStyles.fileTree;
    const directoryStyle = this.props.directoryStyle ? styles.directory : defaultStyles.directory;
    const fileStyle = this.props.fileStyle ? styles.file : defaultStyles.file;

    return (
      files.length > 0 &&
      <ul style={fileTreeStyle}>
        {files.map(file => {

          const filePath = file.filePath;
          const fileName = filePath.split('/').slice(-1).join('');

          return file.isDirectory ?
            <li key={filePath + ' Directory'} style={directoryStyle}>
              <div onClick={() => this.setVisibility(file.filePath)}>
                <Directory className="directory" visible={this.props.isVisible[file.filePath]} {...fontAwesomeProps} theme={this.props.directoryTheme} />{`               ${fileName}`}
              </div>
              {this.props.isVisible[file.filePath] &&
              <FileTree
                directory={file.filePath}
                files={file.files}
                onFileClick={this.props.onFileClick}
                toggleVisibility={this.props.toggleVisibility}
                directoryTheme={this.props.directoryTheme || 'light'}
                fileTheme={this.props.fileTheme || 'light'}
                isVisible={this.props.isVisible}
                fileTreeStyle={this.props.fileTreeStyle}
                directoryStyle={this.props.directoryStyle}
                fileStyle={this.props.fileStyle}
                {...fontAwesomeProps}
              />}
            </li>
            :
            <li key={filePath} onClick={() => this.onFileClick(file)} style={fileStyle}><File className="file" {...fontAwesomeProps} theme={this.props.fileTheme} />{`               ${fileName}`}</li>;
          })
        }
      </ul>
    );
  }
}
