// const fs = require('fs');
import fs from 'fs';

const list = async () => {
    const path = 'src/fs/files';

    fs.readdir(path, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
};

list();