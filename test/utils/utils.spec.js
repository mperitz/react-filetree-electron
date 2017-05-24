import { getAllFiles } from '../../src/utils/file-functions';
import { deleteNonFontAwesomeKeys } from '../../src/utils/helpers';
import path from 'path';
import { spy } from 'sinon';

const pathToFakeFiles = path.resolve(__dirname, '..', 'fake-directory');
let myTestObject;
let newObject;

xdescribe('getAllFiles function', () => {

  it('should create an array of file objects', () => {
    return getAllFiles(pathToFakeFiles)
      .then(files => {
        const [ file1, file2, file3 ] = files;
        expect(files).toHaveLength(5);
        expect(typeof files[0]).toEqual('object');
        expect(file1.isDirectory).toBe(true);
        expect(file3.isDirectory).toBe(false);
        expect(file1.filePath).toBe(path.resolve(pathToFakeFiles, 'directory1'));
        expect(file2.filePath).toBe(path.resolve(pathToFakeFiles, 'directory2'));
        expect(file3.filePath).toBe(path.resolve(pathToFakeFiles, 'file1.js'));
        return null;
      });
  });

  it('should throw an error when an improper filePath is given', () => {
    return getAllFiles(pathToFakeFiles + '/THIS-DIRECTORY-DOES-NOT-EXIST')
      .catch(err => {
        expect(err.message).toContain('ENOENT: no such file or directory');
      });
  });

});

xdescribe('deleteNonFontAwesomeKeys function', () => {

  beforeEach(() => {
    myTestObject = {
      flip: true,
      pulse: true,
      nonFontAwesomeProp: 'this should be removed'
    };
    newObject = deleteNonFontAwesomeKeys(myTestObject);
  });

  it('should delete only keys from an object that are not available as props on a react-fontawesome component', () => {
    expect(Object.keys(newObject)).toEqual(['flip', 'pulse']);
  });

  it('should not modify the original object', () => {
    expect(Object.keys(myTestObject)).toEqual(['flip', 'pulse', 'nonFontAwesomeProp']);
  });

});
