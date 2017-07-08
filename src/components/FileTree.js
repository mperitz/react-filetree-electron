import React, { Component } from 'react';

import Directory from './Directory';
import File from './File';
import { getAllFiles } from '../utils/file-functions';
import { mergeStyleObjects } from '../utils/helpers';
import defaultStyles from '../utils/defaultStyles';

export default class FileTree extends Component {
  constructor() {
    super();
    this.state = {
      files: this.props ? this.props.files : []
    };
    this.handleDirectoryClick = this.handleDirectoryClick.bind(this);
    this.onFileClick = this.onFileClick.bind(this);
  }

  componentWillReceiveProps({ directory }) {
    if (this.props.openedDirectories && this.props.openedDirectories[directory]) {
      this.setState({ files: this.props.openedDirectories[directory] });
    } else {
      return directory && getAllFiles(directory)
      .then(files => this.setState({ files }))
      .catch(console.error);
    }
  }

  handleDirectoryClick(file) {
    this.props.toggleVisibility(file.filePath);
    if ((this.props.openedDirectories && !this.props.openedDirectories[file.filePath]) || this.props.isVisible[file.filePath]) {
      return getAllFiles(file.filePath)
      .then(files => this.props.dispatchOpenDirectory(file.filePath, files))
      .catch(console.error);
    }
  }

  onFileClick(file) {
    this.props.onFileClick && this.props.onFileClick(file);
  }

  render() {
    const files = this.state.files;

    // Lines 58-60 merge any style props passed down with default props.  This way no unexpected changes
    // occur as a result of passing down style props.
    const fileTreeStyle = this.props.fileTreeStyle ? mergeStyleObjects(defaultStyles.fileTreeStyle, this.props.fileTreeStyle) : defaultStyles.fileTreeStyle;
    const directoryStyle = this.props.directoryStyle ? mergeStyleObjects(defaultStyles.directoryStyle, this.props.directoryStyle) : defaultStyles.directoryStyle;
    const fileStyle = this.props.fileStyle ? mergeStyleObjects(defaultStyles.fileStyle, this.props.fileStyle) : defaultStyles.fileStyle;

    return (
      files.length > 0 &&
      <ul className="_fileTree" style={fileTreeStyle} >
        {files.map(file => {

          const filePath = file.filePath;
          const fileName = filePath.split('/').slice(-1).join('');

          return file.isDirectory ?
            <li className="_directory" key={filePath + ' Directory'} style={directoryStyle}>
              <div onClick={() => this.handleDirectoryClick(file)}>
                <Directory className="directory" visible={this.props.isVisible[file.filePath]} theme={this.props.directoryTheme} />{`               ${fileName}`}
              </div>
              {this.props.isVisible[file.filePath] &&
              <FileTree
                directory={file.filePath}
                files={file.files}
                onFileClick={this.props.onFileClick}
                toggleVisibility={this.props.toggleVisibility}
                dispatchOpenDirectory={this.props.dispatchOpenDirectory}
                openedDirectories={this.props.openedDirectories}
                directoryTheme={this.props.directoryTheme || 'light'}
                isVisible={this.props.isVisible}
                fileTreeStyle={this.props.fileTreeStyle}
                directoryStyle={this.props.directoryStyle}
                fileStyle={this.props.fileStyle}
              />}
            </li>
            :
            <li className="_file" key={filePath} onClick={() => this.onFileClick(file)} style={fileStyle}><File className="file" />{`               ${fileName}`}</li>;
          })
        }
      </ul>
    );
  }
}
