import fs from 'fs';
import Parser from '../app/models/Parser';

const parser = new Parser();

const path = `${__dirname}/../uploads/`;

function readAllFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
        parser.readFile(dirname+filename);
      });
    });
  });
}

var data = {};
fs.watch(path, () => {
  readAllFiles(path, function(filename, content) {
    data[filename] = content;
  }, function(err) {
    throw err;
  });
});

export default parser;


