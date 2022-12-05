// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';


const files = 'src/fs/files';
const filesCopy = 'src/fs/files_copy';


const copy = async (src1, src2) => {

    fs.stat(filesCopy,  (err) => {

        if (err) {
            const exist = fs.existsSync(src1);
            const stats = exist && fs.statSync(src1);
            const isDirectory = stats && stats.isDirectory();

            if(isDirectory) {
                if(!fs.existsSync(src2))
                    fs.mkdirSync(src2);

                fs.readdirSync(src1).forEach(item => {
                    copy(path.join(src1, item), path.join(src2, item));
                });
            } else {
                if(!fs.existsSync(src2))
                    fs.copyFileSync(src1, src2)
            }
        
        }
        console.log('FS operation failed');
      })

};

copy(files, filesCopy);


