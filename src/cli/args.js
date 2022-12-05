// v console
// node src/cli/args.js --some-arg value1 --other 1337 --arg2 42

const parseArgs = () => {
    process.argv.forEach((i, index, arr) => {
        if (i.indexOf('--') === 0 && arr[index+1].indexOf('--') === -1) {
            const transform = () => {
               return `${i.replace('--', '')} is ${arr[index + 1]}, `;
            }
            console.log(transform());
        }
    })
};

parseArgs();