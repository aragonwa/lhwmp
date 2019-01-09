const fs = require('fs');
const ejs = require('ejs');
const chalk = require('chalk');

console.log(chalk.green('Building ejs files ....'));

function ejs2html(path, information) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.log('ERROR: ' + err);
      return false;
    }
    const ejs_string = data;
    const template = ejs.compile(ejs_string, {
        filename: path
      });
    const html = template(information);
    const filename = path.split('/').pop().split('.')[0];
    filePath = __dirname + '/../public/'+filename+'.html';
    fs.writeFile(filePath, html, function(err) {
      if (err) {
        console.log(err);
        return false;
      }
      return true;
    });
  });
}

// Get ejs files in src directory and build html files
fs.readdir(__dirname + '/../src/', (err, files) => {
  files.forEach(file => {
      if(/[a-zA-Z0-9_-]+.ejs/gi.test(file)) {
        ejs2html(__dirname + '/../src/'+file);
      }
  });
});
