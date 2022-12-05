// const fs = require('fs');
import fs from 'fs';

const rename = async () => {

    const newFile = 'src/fs/files/properFilename.md';
    const File = 'src/fs/files/wrongFilename.txt';

    fs.rename(File, newFile, (err) => {
        if (err) {
            console.log('FS operation failed');
            return;
        }
    });
};

rename();