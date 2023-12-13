const fs = require('fs');

const readData = () => {
  fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (data) {
      console.log(data);
    }
  });
};

readData();

for (let i = 0; i < 100; i++) {
  console.log(i);
}
