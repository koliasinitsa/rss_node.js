// const fs = require("fs");
import fs from 'fs';

const write = async () => {
    // 
    const path = 'src/streams/files/fileToWrite.txt'
    const ws = fs.createWriteStream(path);

    process.stdin.pipe(ws);
    
    console.log('zaebis, ebash message v console... \nout iz console ctrl + c');
};

write();