const fs = require('fs');

const writeData = () => {
  fs.appendFile('text.txt', '\n from rahul narake', (err, data) => {
    console.log(data);
  });
};

writeData();
