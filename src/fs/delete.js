// const fs = require('fs');
import fs from 'fs';

const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt';

    fs.unlink(path, (err) => {
        if (err) {
            console.error(err.name);
            console.error(err.message);
            console.error('FS operation failed');
        }
      });

};

remove();