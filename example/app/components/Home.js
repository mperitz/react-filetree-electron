// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FileTree from '../components/FileTreeComponent';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div data-tid="container">
          <h2>Home</h2>
          <FileTree />
        </div>
      </div>
    );
  }
}
