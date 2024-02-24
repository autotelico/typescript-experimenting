const fs = require('fs');

fs.writeFile('README.md', 'A repo for me to push some TypeScript experiments and practice stuff.', err => {
    if (err) throw new Error('Couldn\'t write file cuzzzzz idk lol this wasn\'t supposed to happen.');
})