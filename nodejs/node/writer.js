var fs=require('fs');
var data='I am learning node.js';

var writerStream=fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish',function() {
   console.log("write completed");
});

writerStream.on('error',function(err) {
    console.log(err.stack);
});


