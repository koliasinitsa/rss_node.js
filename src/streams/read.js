// const fs = require("fs");
import fs from 'fs';
// const process = require('process');
import process from 'process';

const read = async () => {
    // Write your code here 
    
    const path = 'src/streams/files/fileToRead.txt';

    const rs = fs.createReadStream(path);
    
    rs.pipe(process.stdout);
};

read();