var fs = require("fs")
fs.readFile('sample.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");