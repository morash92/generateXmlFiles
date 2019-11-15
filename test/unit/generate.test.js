const generateFiles = require('../../generate');
const fs = require('fs');
jest.spyOn(fs, 'readFile');

describe('generateFiles', () => {
   it('reads a file', async () => {
       fs.readFile.mockReturnValue(true);

       await generateFiles(1, 100002);

       expect(fs.readFile).toHaveBeenCalledTimes(1);
       expect(fs.readFile).toHaveBeenCalledWith('./100002.xml', expect.any(Function));
   });
});