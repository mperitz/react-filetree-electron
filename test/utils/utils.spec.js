import { getAllFiles } from '../../src/utils/file-functions';
import { mergeStyleObjects } from '../../src/utils/helpers';
import path from 'path';

const pathToFakeFiles = path.resolve(__dirname, '..', 'fake-directory');
let myTestObject, nextObject, merged;

describe('utility and helper functions', () => {

  beforeEach(() => {
    myTestObject = {
      flip: true,
      pulse: true,
      nonFontAwesomeProp: 'this should be removed'
    };
  });

  describe('getAllFiles function', () => {

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

  describe('mergeStyleObjects function', () => {

    beforeEach(() => {
      nextObject = {
        newProp: 'A new property',
        anotherNewProp: 'Another new property!'
      };
      merged = mergeStyleObjects(myTestObject, nextObject);
    });

    it('should merge two objects together', () => {
      expect(merged).toEqual(Object.assign(myTestObject, nextObject));
    });

    it('should not modify either input object', () => {
      expect(Object.keys(myTestObject)).toEqual(['flip', 'pulse', 'nonFontAwesomeProp']);
      expect(Object.keys(nextObject)).toEqual(['newProp', 'anotherNewProp']);
    });

  });

});
