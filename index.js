const fs = require('fs');
require('log-timestamp')

const testLogFile = './test.log'

console.log('Im looking for changes to', testLogFile);

fs.watchFile(testLogFile, (curr, prev) => {
    console.log(testLogFile, 'has changed!')
});