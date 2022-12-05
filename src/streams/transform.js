// const { Transform } = require('stream');
// const process = require('process');
import process from 'process';
import Transform from 'stream';

const transform = async () => {
    const reverse = new Transform ({
        transform(chunk, encoding, callback) {
            try {
                const string = chunk.toString().split('').reverse().join("");
                callback(null, string);
            } catch (err) {
                callback(err);
            }
            
        },
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

transform();