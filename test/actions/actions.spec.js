import { spy } from 'sinon';
import { toggleVisibility } from '../../src/reducers/file-tree';

const testFile = {
  isDirectory: true,
  filePath: '/Users/fake-user/projects/fake-project/app/components'
};

describe('toggleVisibility', () => {

  it('should create a TOGGLE_VISIBILITY action', () => {
    expect(toggleVisibility(testFile.filePath)).toEqual({ type: 'TOGGLE_VISIBILITY', filePath: testFile.filePath });
  });

});
