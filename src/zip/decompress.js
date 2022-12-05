import {createReadStream, createWriteStream} from 'fs';
import {createUnzip} from 'zlib';

const decompress = async () => {
    const readeble = createReadStream('src/zip/files/archive.gz');
    const writeble = createWriteStream('src/zip/files/fileToCompress.txt');
    const zlib = createUnzip();

    readeble.pipe(zlib).pipe(writeble);
};

decompress();