const fs = require('fs');
let rawdata = fs.readFileSync('employee.json');
let student = JSON.parse(rawdata);
console.log(student);