//import or require using normal
// const normal=require("./import_export_in_commonjs");//a file in current directory
//console.log(add(2,2));// i can only take one function 
const object=require("./import_export_in_commonjs");
console.log(object);
console.log(object.add(2,2));//using .
console.log(object["multi"](5,7));//square notation 
console.log(object["remender"](2,2));
