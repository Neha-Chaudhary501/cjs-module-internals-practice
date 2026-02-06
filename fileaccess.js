// // import Path from "path";
// // import fs from "fs";
// // const dynamicPath=Path.join("D:\DSA\Stack");
// // console.log(dynamicPath);
// // fs.readFile("D:\\DSA\\Stack\\x.java", 'utf8', (err, data) => {
// //     if (err) {
// //         console.error(err);
// //         return;
// //     }
// //     console.log(data);
// // });
// console.log(process.env.PATH);
// // Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

// process.env.PATH.split(path.delimiter);
// // Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']
// ---------------------- use of os in nodejs ----------------------
//          all asynch func assigned to the os node js dont do anyting only 
//          assign task to the os and os will do that task and give us the result when it is done
import os from "os";
// for checking the plateform
console.log(os.platform());
// for conversion of bytes to kb
console.log(os.freemem()/1024);
// for checking the total memory
console.log(os.totalmem()/1024);
//for archetecture of the os
console.log(os.arch());