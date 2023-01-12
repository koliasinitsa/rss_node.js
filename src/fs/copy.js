// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';


const files = 'src/fs/files';
const filesCopy = 'src/fs/files_copy';


const copy = async (src, dest) => {
    const exist = fs.existsSync(src);
    const stats = exist && fs.statSync(src);
    const isDirectory = stats && stats.isDirectory();

    if(isDirectory) {
        if(!fs.existsSync(dest))
            fs.mkdirSync(dest);

        fs.readdirSync(src).forEach(childItemName => {
            copy(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        if(!fs.existsSync(dest))
            fs.copyFileSync(src, dest)
    }
};

copy(files, filesCopy);


