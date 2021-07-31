const fs = require('fs');
const path = require('path');

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname,'products.json'),'utf-8')) /* saco la carpeta data, porque el dirname ya llega hasta ahí... NO X__dirname,'data','products.json'X NO */