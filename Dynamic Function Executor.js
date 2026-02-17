// [
//     "node",
//     "file.js",
//     "sum",
//     "1",
//     "2"
// ]

const [,,functionName,val1,val2]=process.argv;//process send req to 
console.log(functionName,val1,val2);
if(functionName==="sum"){
  console.log(Number(val1)+Number(val2));
}
if(functionName==="multi"){
    console.log(Number(val1)*Number(val2));
}
if(functionName==="substract"){
  console.log(Number(val1)-Number(val2));
}