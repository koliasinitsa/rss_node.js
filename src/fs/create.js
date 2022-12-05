// const fs = require('fs');
import fs from 'fs';

const create = async () => {

    const path = 'src/fs/files/fresh.txt';
    
    fs.access(path, function(error){
        if (error) {
            fs.writeFile(path, 'I am fresh and young', () =>{});
        } else {
            console.error('FS operation failed');
        }
    });
};
create();

