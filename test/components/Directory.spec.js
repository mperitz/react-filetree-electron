import React from 'react';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import FontAwesome from 'react-fontawesome';

import Directory from '../../src/components/Directory';

const setup = () => {
  const props = {
    size: '2x',
    pulse: true
  };
  const directory = shallow(<Directory {...props} />);
  return {
    directory,
    props
  };
};

let test;

describe('Directory component', () => {

  beforeEach(() => {
    test = setup();
  });

  describe('if props.visible === true', () => {

    beforeEach(() => {
      test.directory.setProps({ visible: true });
    });

    it('should render a "folder-open-o" FontAwesome directory icon if no theme is provided', () => {
      expect(test.directory.find('.icon.directory').root.node.props.name).toEqual('folder-open-o');
    });

    it('should render a "folder-open-o" FontAwesome directory icon if "light" theme is provided', () => {
      test.directory.setProps({ theme: 'light' });
      expect(test.directory.find('.icon.directory').root.node.props.name).toEqual('folder-open-o');
    });

    it('should render a "folder-open" FontAwesome directory icon if "dark" theme is provided', () => {
      test.directory.setProps({ theme: 'dark' });
      expect(test.directory.find('.icon.directory').root.node.props.name).toEqual('folder-open');
    });

    it('should not render with the visible prop', () => {
      expect(test.directory.find('.icon.directory').root.node.props.visible).toEqual(undefined);
    });

  });

  describe('if props.visible === false', () => {

    beforeEach(() => {
      test.directory.setProps({ visible: false });
    });

    it('should render a "folder-o" FontAwesome directory icon if no theme is provided', () => {
      expect(test.directory.find('.icon.directory').root.node.props.name).toEqual('folder-o');
    });

    it('should render a "folder-o" FontAwesome directory icon if "light" theme is provided', () => {
      test.directory.setProps({ theme: 'light' });
      expect(test.directory.find('.icon.directory').root.node.props.name).toEqual('folder-o');
    });

    it('should render a "folder" FontAwesome directory icon if "dark" theme is provided', () => {
      test.directory.setProps({ theme: 'dark' });
      expect(test.directory.find('.icon.directory').root.node.props.name).toEqual('folder');
    });

    it('should not render with the visible prop', () => {
      expect(test.directory.find('.icon.directory').root.node.props.visible).toEqual(undefined);
    });

  });

  describe('font awesome properties', () => {

    it('should render with any passed down fontAwesomeProps', () => {
      expect(test.directory.find('.icon.directory').root.node.props.size).toEqual('2x');
      expect(test.directory.find('.icon.directory').root.node.props.pulse).toEqual(true);
    });

    it('rendered FontAwesome component should throw a warning to the console if a non-fontAwesomeProp is passed', () => {
      const warnTest = stub(console, 'error');
      mount(<FontAwesome name="folder" fakeProperty="this should cause a warning" />);
      expect(warnTest.called).toEqual(true);
    });

  });

});
