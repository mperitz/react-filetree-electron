import React from 'react';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import FontAwesome from 'react-fontawesome';

import File from '../../src/components/File';

const setup = () => {
  const props = {
    visible: true,
    size: '2x',
    pulse: true
  };
  const file = shallow(<File {...props} />);
  return {
    file,
    props
  };
};

let test;

describe('File component', () => {

  beforeEach(() => {
    test = setup();
  });

  it('should render a "file-o" FontAwesome file icon if no theme is provided', () => {
    expect(test.file.find('.icon.file').root.node.props.name).toEqual('file-o');
  });

  it('should render a "file-o" FontAwesome file icon if "light" theme is provided', () => {
    test.file.setProps({ theme: 'light' });
    expect(test.file.find('.icon.file').root.node.props.name).toEqual('file-o');
  });

  it('should render a "file" FontAwesome file icon if "dark" theme is provided', () => {
    test.file.setProps({ theme: 'dark' });
    expect(test.file.find('.icon.file').root.node.props.name).toEqual('file');
  });

  it('should not render with the visible prop', () => {
    expect(test.file.find('.icon.file').root.node.props.visible).toEqual(undefined);
  });

  it('should render with any passed down fontAwesomeProps', () => {
    expect(test.file.find('.icon.file').root.node.props.size).toEqual('2x');
    expect(test.file.find('.icon.file').root.node.props.pulse).toEqual(true);
  });

  it('rendered FontAwesome component should throw a warning to the console if a non-fontAwesomeProp is passed', () => {
    const warnTest = stub(console, 'error');
    mount(<FontAwesome fakeProperty="this should cause a warning" />);
    expect(warnTest.called).toEqual(true);
  });

});
