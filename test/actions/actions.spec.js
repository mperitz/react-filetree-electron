import { toggleVisibility, openDirectory } from '../../src/reducers/file-tree';

const testFile = {
  isDirectory: true,
  filePath: '/Users/fake-user/projects/fake-project/app/components'
};

const testFiles = [
  {
    isDirectory: false,
    filePath: '/Users/fake-user/projects/fake-project/app/components/testFile1'
  },
  {
    isDirectory: false,
    filePath: '/Users/fake-user/projects/fake-project/app/components/testFile2'
  },
]

describe('toggleVisibility', () => {

  it('should create a TOGGLE_VISIBILITY action', () => {
    expect(toggleVisibility(testFile.filePath)).toEqual({ type: 'TOGGLE_VISIBILITY', filePath: testFile.filePath });
  });

});

describe('openDirectory', () => {

  it('should create a OPEN_DIRECTORY action', () => {
    expect(openDirectory(testFile.filePath, testFiles)).toEqual({ type: 'OPEN_DIRECTORY', filePath: testFile.filePath, files: testFiles });
  });

});
