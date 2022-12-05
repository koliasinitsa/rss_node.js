import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';

const compress = async () => {
    const readeble = createReadStream('src/zip/files/fileToCompress.txt');
    const writeble = createWriteStream('src/zip/files/archive.gz');
    const zlib = createGzip();

    readeble.pipe(zlib).pipe(writeble);
};

compress();

// node src/zip/compress.js