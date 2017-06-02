import React from 'react';
import { shallow } from 'enzyme';

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

    it('should render a "light open folder" icon if no theme is provided', () => {
      expect(test.directory.find('.icon.directory').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGjpYSR1eAAAAyUlEQVQoz4XRL0tDYRQG8N99uZZtoIIbti35CQSbYaDBRb+BrIrfwSArwtKsglmjbM1oMynGG2RhQRQ1OC5iuCvi+7LnlAPPc85z/rAEmQO7i/zTmZ//goEL62Bb2/Uf9sk8M1D3aC3Sfceph4AVJ94iMdEnaNn36lnTTE2pVDPTVChs6GTGLuXqiugSvXzhdhylg72ATdPEEbruGLvXSQjO5QHfCf+GuTJouErUH7qpDryaEIyqOW+9R+m2l+oXR7aigg9DX5bjF4fIMaNLBnRmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTAyVDIxOjI2OjU4KzAyOjAwvVAT2QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0wMlQyMToyNjo1OCswMjowMMwNq2UAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');
    });

    it('should render a "light open folder" icon if "light" theme is provided', () => {
      test.directory.setProps({ theme: 'light' });
      expect(test.directory.find('.icon.directory').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGjpYSR1eAAAAyUlEQVQoz4XRL0tDYRQG8N99uZZtoIIbti35CQSbYaDBRb+BrIrfwSArwtKsglmjbM1oMynGG2RhQRQ1OC5iuCvi+7LnlAPPc85z/rAEmQO7i/zTmZ//goEL62Bb2/Uf9sk8M1D3aC3Sfceph4AVJ94iMdEnaNn36lnTTE2pVDPTVChs6GTGLuXqiugSvXzhdhylg72ATdPEEbruGLvXSQjO5QHfCf+GuTJouErUH7qpDryaEIyqOW+9R+m2l+oXR7aigg9DX5bjF4fIMaNLBnRmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTAyVDIxOjI2OjU4KzAyOjAwvVAT2QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0wMlQyMToyNjo1OCswMjowMMwNq2UAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');
    });

    it('should render a "dark open folder" icon if "dark" theme is provided', () => {
      test.directory.setProps({ theme: 'dark' });
      expect(test.directory.find('.icon.directory').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGxp6PAzXAAAAs0lEQVQoz4XRMWoCURgE4G8fu9HO1so2pNBTBNQTWKZPbZEzpEqbwkrBM5jFOnUQL6AhhDQhaYRAeCk2iOBbnamGmf9nYDiDzJ3BXs09Hgeib7t/9Wlx4BVmnjPRrcvk97bMiOjDFE1BQy7XEDTBAzlKa1f6Vjq+0LLRtbRVQNR241dM8MdTAGMh2aLwRjRMXle8JprX2q8C0a42cF+VrGfvdOAFNe0rzCBXukja7ybnlgZ/6rltujAhGeEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMDJUMjE6Mjc6MjYrMDI6MDAIaAqjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTAyVDIxOjI3OjI2KzAyOjAweTWyHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');
    });

  });

  describe('if props.visible === false', () => {

    beforeEach(() => {
      test.directory.setProps({ visible: false });
    });

    it('should render a "light closed folder" icon if no theme is provided', () => {
      expect(test.directory.find('.icon.directory').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGR3Wbvv2AAAAaUlEQVQoz2NkEGCAgT8MXxgwACPDAYYdULYaQw/DNXQFLAwnGDrg7GkM0zAVMCBZ0cUwm2EminwkEwr3DsMcBlncJjAwMDAsZdBmYEXiv0VXwMBwFYX3iomBABgeCpAjCxvwYESKbqwAAHITEZ7KZcKtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTAyVDIxOjI1OjI5KzAyOjAw+tWqdwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0wMlQyMToyNToyOSswMjowMIuIEssAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');
    });

    it('should render a "light closed folder" icon if "light" theme is provided', () => {
      test.directory.setProps({ theme: 'light' });
      expect(test.directory.find('.icon.directory').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGR3Wbvv2AAAAaUlEQVQoz2NkEGCAgT8MXxgwACPDAYYdULYaQw/DNXQFLAwnGDrg7GkM0zAVMCBZ0cUwm2EminwkEwr3DsMcBlncJjAwMDAsZdBmYEXiv0VXwMBwFYX3iomBABgeCpAjCxvwYESKbqwAAHITEZ7KZcKtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTAyVDIxOjI1OjI5KzAyOjAw+tWqdwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0wMlQyMToyNToyOSswMjowMIuIEssAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');
    });

    it('should render a "dark closed folder" icon if "dark" theme is provided', () => {
      test.directory.setProps({ theme: 'dark' });
      expect(test.directory.find('.icon.directory').props().src).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGhiNKVy6AAAARElEQVQoz2NkEGCAgT8MXxiwgP9w+INBB1OakeE/Eu8SQzx+BQwMpxn6UPiRTGgaTBhk8JuAAZgYGEYVEKOAESm6sQIA6nkOebiEmT8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMDJUMjE6MjY6MjQrMDI6MDBwNXC0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTAyVDIxOjI2OjI0KzAyOjAwAWjICAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');
    });

  });

});
