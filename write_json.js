const fs = require('fs');

let student = {
    name : 'hk',
    age : 23,
    gender :'male',
    department : 'English'
};

let data = JSON.stringify(student);
fs.writeFileSync('student.json',data);