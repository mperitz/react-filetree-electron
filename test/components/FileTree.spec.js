import React from 'react';
import path from 'path';
import { spy } from 'sinon';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import FileTree from '../../src/components/FileTree';
import fileFunctions from '../../src/utils/file-functions';
import defaultStyles from '../../src/utils/defaultStyles';

const setup = () => {
  const props = {
    directory: path.resolve(__dirname, '..', './fake-directory'),
    onFileClick: spy(),
    isVisible: {},
    toggleVisibility: spy()
  };
  const getAllFilesSpy = spy(fileFunctions, 'getAllFiles');
  const fileTree = mount(<FileTree {...props} />);
  const handleDirectoryClickSpy = spy(fileTree.instance(), 'handleDirectoryClick');
  const onFileClickSpy = spy(fileTree.instance(), 'onFileClick');
  return {
    fileTree,
    props,
    getAllFilesSpy,
    handleDirectoryClickSpy,
    onFileClickSpy
  };
};

let test;
const files = [
  { filePath: './fakefile1/path/name.js', isDirectory: false },
  { filePath: './fakefile2/path/name.js', isDirectory: false },
  { filePath: './fakedir1/path/folder1', isDirectory: true },
  { filePath: './fakedir2/path/folder2', isDirectory: true }
];

describe('FileTree Component', () => {

  afterEach(() => {
    test.getAllFilesSpy.restore();
    test.handleDirectoryClickSpy.restore();
    test.onFileClickSpy.restore();
  });

  describe('lifecycle', () => {

    beforeEach(() => {
      test = setup();
    });

    afterEach(() => {
      test.getAllFilesSpy.restore();
    });

    it('should call getAllFiles in componentWillReceiveProps', () => {
      test.fileTree.setProps({ directory: '/new/directory' });
      expect(test.getAllFilesSpy.called).toEqual(true);
    });

  });

  describe('rendering', () => {

    let listItems;

    beforeEach(() => {
      test = setup();
      test.fileTree.setState({ files });
      listItems = test.fileTree.find('li');
    });

    it('should render a list item for each file or directory', () => {
      expect(listItems.length).toEqual(4);
    });

    it('should render a File component for files and a Directory component for directories', () => {
      expect(test.fileTree.find('.file').length).toEqual(2);
      expect(test.fileTree.find('.directory').length).toEqual(2);
    });

    it('should call the onFileClick function when file list items are clicked', () => {
      listItems.at(0).simulate('click');
      expect(test.onFileClickSpy.called).toEqual(true);
      expect(test.props.onFileClick.called).toEqual(true);
    });

    it('should call the handleDirectoryClick function when directory list items are clicked', () => {
      listItems.at(2).find('div').simulate('click');
      expect(test.handleDirectoryClickSpy.called).toEqual(true);
      expect(test.props.toggleVisibility.called).toEqual(true);
      expect(test.props.toggleVisibility.calledWith('./fakedir1/path/folder1')).toEqual(true);
    });

  });

  describe('style props', () => {

    let fileTree, directory, file;

    const mergeStyle = {
      fileTreeStyle: {
        color: 'purple',
        size: 20,
        margin: 50,
        float: 'left',
        fontFamily: 'times-new-roman'
      },
      directoryStyle: {
        fontFamily: 'wingdings',
        color: 'green',
        marginBottom: 10
      },
      fileStyle: {
        color: 'blue',
        float: 'right'
      }
    };

    beforeEach(() => {
      test = setup();
      test.fileTree.setState({ files });
      fileTree = test.fileTree.find('._fileTree');
      directory = test.fileTree.find('._directory');
      file = test.fileTree.find('._file');
    });

    it('should have default style props if none are specified', () => {
      expect(fileTree.at(0).props().style).toEqual(defaultStyles.fileTreeStyle);
      expect(directory.at(0).props().style).toEqual(defaultStyles.directoryStyle);
      expect(file.at(0).props().style).toEqual(defaultStyles.fileStyle);
    });

    it('should merge any passed in style props with default', () => {
      test.fileTree.setProps(mergeStyle);
      expect(fileTree.at(0).props().style).toEqual(Object.assign(defaultStyles.fileTreeStyle, mergeStyle.fileTreeStyle));
      expect(directory.at(0).props().style).toEqual(Object.assign(defaultStyles.directoryStyle, mergeStyle.directoryStyle));
      expect(file.at(0).props().style).toEqual(Object.assign(defaultStyles.fileStyle, mergeStyle.fileStyle));
    });

  });

});
