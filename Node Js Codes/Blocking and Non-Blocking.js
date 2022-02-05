//Synchronus or blocking
//Line by line execution

//Asynchronus or Non-blocking
//Line by line will not be guarenteed but callbacks will fire.
const fs = require('fs');
let text = fs.readFile('text.txt','utf-8',(err,data)=>{
    console.log(err,data)
});
console.log("Task completed!!")