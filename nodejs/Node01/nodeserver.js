const http = require('http');
http
.createServer((req,res)=> {
    Console.log('requets มาอีกแล้ว');
    res.write('Hollow');
    res.end();
})
.listen(80);
console.log('one');
console.log('two');
console.log('three');