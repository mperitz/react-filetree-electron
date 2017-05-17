import { getAllFiles } from '../../src/utils/file-functions';
import path from 'path';

const pathToFakeFiles = path.resolve(__dirname, '..', 'fake-directory');

describe('getAllFiles function', () => {

  it('returns a promise for an array of nested files', () => {
    return getAllFiles(pathToFakeFiles)
      .then(files => {
        const [ file1, file2, file3 ] = files;
        expect(files).toHaveLength(5);
        expect(file1.isDirectory).toBe(true);
        expect(file1.filePath).toBe(path.resolve(pathToFakeFiles, 'directory1'));
        expect(file2.filePath).toBe(path.resolve(pathToFakeFiles, 'directory2'));
        expect(file3.filePath).toBe(path.resolve(pathToFakeFiles, 'file1.js'));
        return null;
      });
  });

});
