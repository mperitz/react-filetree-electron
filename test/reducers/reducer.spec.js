import reducer, { toggleVisibility } from '../../src/reducers/file-tree';

describe('reducer', () => {

  it('should return initial state if no action provided', () => {
    expect(
      reducer(undefined,
      {}
    ))
    .toEqual({ isVisible: {}, openedDirectories: {} });
  });

  describe('should handle TOGGLE_VISIBILITY action if...', () => {

    it('filePath is not a key on state.isVisible', () => {
      expect(
        reducer({ isVisible: {}, openedDirectories: {} },
        toggleVisibility('/app/fakeFile')
      ))
      .toEqual({
        isVisible: {
          '/app/fakeFile': true
        },
        openedDirectories: {}
      });
    });

    it('filePath is a key on state.isVisible and has value "true"', () => {
      expect(
        reducer({ isVisible: { '/app/fakeFile': true }, openedDirectories: {} },
        toggleVisibility('/app/fakeFile')
      ))
      .toEqual({
        isVisible: {
          '/app/fakeFile': false
        },
        openedDirectories: {}
      });
    });

    it('filePath is a key on state.isVisible and has value "false"', () => {
      expect(
        reducer({ isVisible: { '/app/fakeFile': false }, openedDirectories: {} },
        toggleVisibility('/app/fakeFile')
      ))
      .toEqual({
        isVisible: {
          '/app/fakeFile': true
        },
        openedDirectories: {}
      });
    });

  });


});
