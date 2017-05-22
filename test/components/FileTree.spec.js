import React from 'react';
import path from 'path';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import FileTree from '../../src/components/FileTree';
import reducer from '../../src/reducers/file-tree';
import { deleteNonFontAwesomeKeys } from '../../src/utils/helpers';

const store = createStore(reducer);

const setup = () => {
  const props = {
    directory: path.resolve(__dirname, '..', 'fake-directory'),
    onFileClick: spy(),
    isVisible: {},
    toggleVisibility: spy()
  };
  const fileTree = shallow(<Provider store={store}><FileTree {...props} /></Provider>);
  // props.onFileClickSpy = spy(fileTree.instance(), 'onFileClick');
  return {
    fileTree,
    props,
    fileTreeLi: fileTree.find('li'),
    fileTreeDirectories: fileTree.find('Directory'),
    fileTreeFiles: fileTree.find('File')
  };
};

describe('FileTreeComponent', () => {

  it('should display an unordered list of all directories and files', () => {
    const { fileTreeLi } = setup();
    expect(fileTreeLi.length).toEqual(5);
  });

});

/*
Cant get fileTreeLi to work.....
*/
