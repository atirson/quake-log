import fs from 'fs';
import Parser from '../app/models/Parser';

const parser = new Parser();

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
        fs.watch(`${__dirname}/../uploads/`, (eventType, filename) => {
          console.log(eventType);
          console.log(filename);
        });
        parser.readFile(dirname+filename);
      });
    });
  });
}

var data = {};
readAllFiles(`${__dirname}/../uploads/`, function(filename, content) {
  data[filename] = content;
}, function(err) {
  throw err;
});

export default parser;


