import reducer, { toggleVisibility } from '../../src/reducers/file-tree';

describe('reducer', () => {

  it('should return initial state if no action provided', () => {
    expect(
      reducer(undefined,
      {}
    ))
    .toEqual({ isVisible: {} });
  });

  describe('should handle TOGGLE_VISIBILITY action if...', () => {

    it('filePath is not a key on state.isVisible', () => {
      expect(
        reducer({ isVisible: {} },
        toggleVisibility('/app/fakeFile')
      ))
      .toEqual({
        isVisible: {
          '/app/fakeFile': true
        }
      });
    });

    it('filePath is a key on state.isVisible and has value "true"', () => {
      expect(
        reducer({ isVisible: { '/app/fakeFile': true } },
        toggleVisibility('/app/fakeFile')
      ))
      .toEqual({
        isVisible: {
          '/app/fakeFile': false
        }
      });
    });

    it('filePath is a key on state.isVisible and has value "false"', () => {
      expect(
        reducer({ isVisible: { '/app/fakeFile': false } },
        toggleVisibility('/app/fakeFile')
      ))
      .toEqual({
        isVisible: {
          '/app/fakeFile': true
        }
      });
    });

  });


});
