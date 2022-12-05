import  { readFile } from 'fs/promises';
import {createHash} from 'crypto';

const calculateHash = async () => {
    const path = 'src/hash/files/fileToCalculateHashFor.txt';
    const fileRead = await readFile(path);
    const fileHash = createHash('sha256').update(fileRead).digest('hex');
    console.log('hash :  ' + fileHash);
};

calculateHash();