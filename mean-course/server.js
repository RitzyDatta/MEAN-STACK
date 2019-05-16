//console.log('Riju');
//this is server file

const http = require('http') //'const' beacuse you don't plan on changing it. This http package is default package for node.
const server = http.createServer((req,res) => {
    res.end('This is my first response');
});

server.listen(process.env.PORT || 3000);
