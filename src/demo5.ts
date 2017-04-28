import * as fs from 'fs';

const inputPath = './input/';
const outputPath = './output/';

function statAsync(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
}

async function main() {
    const stats = await statAsync(inputPath);
    console.log(123);
    console.log(stats);
}

main();