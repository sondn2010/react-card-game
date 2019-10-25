
const fs = require('fs');
const path = require('path');

export function readDirectories(directory) {

    var currentDirectory = !directory ? path.join(__dirname) : directory;

    var files = fs.readdirSync(currentDirectory);
    files.forEach(function (file) {
        console.log(file)
    });

    return files
}

export function readDirectoryRecursive(dir, filelist) {
    dir = !dir ? path.join(__dirname) : dir
    var files = fs.readdirSync(dir);

    if (!filelist) {
        filelist = []
        filelist.push({ filePath: dir, isDirectory: true });
    }

    files.forEach(function (file) {
        let currentFilePath = path.join(dir, file)
        
        if (fs.statSync(currentFilePath).isDirectory()) {
            filelist.push({ filePath: currentFilePath, isDirectory: true });
            filelist = readDirectoryRecursive(currentFilePath, filelist);
        }
        else {
            filelist.push({ filePath: currentFilePath, isDirectory: false });
        }
    });
    return filelist;
};