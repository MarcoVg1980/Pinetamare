const fs = require('fs-extra');
const path = require('path');

const source = path.join(__dirname, 'public', 'images');
const destination = path.join(__dirname, 'build', 'images');

console.log('Copying images from', source, 'to', destination);

fs.copySync(source, destination);

console.log('Images copied successfully!');
