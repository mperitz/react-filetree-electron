import React from 'react';
import { shallow } from 'enzyme';

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

  it('should render a "file" icon', () => {
    expect(test.file.find('.icon.file').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVHB2rGQ+zAAAAoklEQVQoz32RMQ6CQBBFn8SOhgMYKmtPQmIIHoDWK9gazkBDsbG2tLCw4ABUkFhaoI2JRzCBguAOMvCrv7Mvf/5mFwCc8JFak5DKQc5Qhhv7zjpo+nIk6hEtYUWG4TUNiOnyd4yJBy3MXEk1YUcgLi+cO2OBK4UAPr2xgM9GACX3f8DFE4A7Tqh4AvCmkU0tsCUE4MBj4kH6VP+L0YpazagBWgH/HwYM4tiKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTAyVDIxOjI4OjI5KzAyOjAwDyshxwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0wMlQyMToyODoyOSswMjowMH52mXsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');
  });

});
