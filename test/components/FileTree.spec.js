import React from 'react';
import path from 'path';
import { spy } from 'sinon';
import { mount } from 'enzyme';

import FileTree from '../../src/components/FileTree';
import fileFunctions from '../../src/utils/file-functions';

const setup = () => {
  const props = {
    directory: path.resolve(__dirname, '..', './fake-directory'),
    onFileClick: spy(),
    isVisible: {},
    toggleVisibility: spy(),
  };
  const getAllFilesSpy = spy(fileFunctions, 'getAllFiles');
  const fileTree = mount(<FileTree {...props} />);
  const setVisibilitySpy = spy(fileTree.instance(), 'setVisibility');
  const onFileClickSpy = spy(fileTree.instance(), 'onFileClick');
  return {
    fileTree,
    props,
    getAllFilesSpy,
    setVisibilitySpy,
    onFileClickSpy
  };
};

let test;
const files = [
  { filePath: './fakefile1/path/name.js', isDirectory: false },
  { filePath: './fakefile2/path/name.js', isDirectory: false },
  { filePath: './fakedir1/path/folder1', isDirectory: true },
  { filePath: './fakedir2/path/folder2', isDirectory: true }
]

describe('FileTree Component', () => {

  describe('lifecycle', () => {

    beforeEach(() => {
      test = setup();
    });

    afterEach(() => {
      test.getAllFilesSpy.restore();
    });

    it('should call getAllFiles in componentDidMount', () => {
      expect(test.getAllFilesSpy.called).toEqual(true);
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

    afterEach(() => {
      test.getAllFilesSpy.restore();
      test.setVisibilitySpy.restore();
      test.onFileClickSpy.restore();
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

    it('should call the setVisibility function when directory list items are clicked', () => {
      listItems.at(2).find('div').simulate('click');
      expect(test.setVisibilitySpy.called).toEqual(true);
      expect(test.props.toggleVisibility.called).toEqual(true);
      expect(test.props.toggleVisibility.calledWith('./fakedir1/path/folder1')).toEqual(true);
    });

  });

  describe('style props', () => {

    let fileTree, directory, file;

    beforeEach(() => {
      test = setup();
      fileTree = test.fileTree.find('ul');
      directory = test.fileTree.find('li') // find directory li using key - check enzyme docs
    })

    it('should have default style props if none are specified', () => {

    })

    it('should have passed in style props if any are provided', () => {

    })

  })

});
