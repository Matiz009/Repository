const fileSystem = require('fs');
fileSystem.writeFile(
    'test.txt',
    'console.log("File System module");',
    (err) => {
        console.log('File created' + err);
    }
);

fileSystem.readFile('package.json', 'utf-8', (err, data) => {
    console.log(data);
});
