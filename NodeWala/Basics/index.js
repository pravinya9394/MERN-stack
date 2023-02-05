const fs = require("fs");

// WORKING WITH THE FS MODULE IN NODE
// WRITING INTO THE FILE IF EXIST AND IF NOT THEN MAKE THE NEW ONE 
// fs.writeFileSync("read.txt","Welcome to basic code");
// fs.writeFileSync("read.txt","Welcome to basic code,newly added data")

// APPEND THE DATA IN THE FILE
// fs.appendFileSync("read.txt","Added again another data")

// READING THE FILE DATA AND GETTING BUFFER DATA AND MAKING IT 
// INTO THE STRING FORMAT WITH toString method
// const buf_data=fs.readFileSync("readWrite.txt");
// console.log(buf_data.toString()); 

// RENAMING THE FILE NAMES
// fs.rename('read.txt', 'readWrite.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });


//   WORKING WITH OS(OPERATING SYSTEM) MODULE IN NODE
const os=require("os");
// console.log(`Total memory in the system is '${os.totalmem()}'`);
// console.log(`Free memory in the system is '${os.freemem()}'`);
// console.log(`Host name is ${os.hostname()}`);
console.log(`Architechture is ${os.arch()}`);
// console.log(`Type is ${os.type()}`);

// const chalk=require("chalk");
// console.log(chalk.red("Hello world"));

// SYCHRONOUS CALLING
// const data=fs.readFileSync('readWrite.txt','utf-8');
// console.log(data);
// console.log("After data read...");

// ASYNCHRONOUS CALLING
// fs.readFile('readWrite.txt','utf-8',(err)=>{
//     console.log("Read done successfully...");
//     console.log(err);
// });
// console.log("After data read...");