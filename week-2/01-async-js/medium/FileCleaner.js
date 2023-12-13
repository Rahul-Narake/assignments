const fs = require('fs');

const cleanFile = () => {
  fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (data) {
      console.log(data);
      console.log(data.replaceAll(/\s+/g, ' ').trim());
      fs.writeFile(
        'text.txt',
        `${data.replaceAll(/\s+/g, ' ').trim()}`,
        (err, data) => {
          console.log(data);
        }
      );
    }
  });
};

cleanFile();
