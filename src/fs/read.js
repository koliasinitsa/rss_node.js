// const fs = require('fs');
import fs from 'fs';

const read = async () => {

    const path = 'src/fs/files/fileToRead.txt';

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
};

read();