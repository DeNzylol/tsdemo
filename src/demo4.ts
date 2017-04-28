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

statAsync(inputPath)
    .then(stats => console.log(stats))
    .catch(err => console.log(err));