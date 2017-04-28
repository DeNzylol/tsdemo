import * as fs from 'fs';

const inputPath = './input/';
const outputPath = './output/';

fs.stat(inputPath, getPathsStat);

function getPathsStat(err: NodeJS.ErrnoException, stats: fs.Stats) {
    if (err) {
        console.log(err);
    } else if (stats.isDirectory()) {
        fs.readdir(inputPath, getFiles);
    }
}

function getFiles(err: NodeJS.ErrnoException, files: string[]) {
    if (err) {
        console.log(err);
    } else {
        files.forEach(getFileContent);
    }
}

function getFileContent(filename: string) {
    const inputFile = inputPath + filename;
    fs.readFile(inputFile, 'utf8', (err, data) => processFile(err, filename, data));
}

function processFile(err: NodeJS.ErrnoException, filename: string, data: string) {
    if (err) {
        console.log(err);
    } else {
        console.log('檔案 ' + filename + ' 讀取完畢，內容為：' + data);
        const outputFile = outputPath + filename.replace('.mp3', '.mp4');
        const content = '嘿嘿嘿，我現在是 MP4 檔了！';
        fs.writeFile(outputFile, content);
    }
}