import * as fs from 'fs';

// 檔案輸入路徑
const inputPath = './input/';
// 檔案輸出路徑
const outputPath = './output/';
// 取得路徑狀態
fs.stat(inputPath, function (err: NodeJS.ErrnoException, stats: fs.Stats) {
    // 如果路徑不存在，會接到錯誤訊息
    if (err) {
        console.log(err);
    } else {
        // 確認路徑是否為資料夾
        if (stats.isDirectory()) {
            // 取得資料夾內容
            fs.readdir(inputPath, function (err: NodeJS.ErrnoException, files: string[]) {
                // 如果讀取發生錯誤，會接到錯誤訊息
                if (err) {
                    console.log(err);
                } else {
                    // 讀取每個檔案的內容
                    files.forEach(function (filename: string) {
                        const inputFile = inputPath + filename;
                        fs.readFile(inputFile, 'utf8', function (err: NodeJS.ErrnoException, data: string) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('檔案 ' + filename + ' 讀取完畢，內容為：' + data);
                                // 組出檔案輸出路徑與新檔名，新檔名是將原檔名的 mp3 替換為 mp4 而成
                                const outputFile = outputPath + filename.replace('.mp3', '.mp4');
                                const content = '嘿嘿嘿，我現在是 MP4 檔了！';
                                // 使用新檔名寫入新內容，並輸出至新路徑
                                fs.writeFile(outputFile, content);
                            }
                        });
                    });
                }
            });
        }
    }
});