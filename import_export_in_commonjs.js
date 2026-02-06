const add=(a,b)=>{
    return a+b;
}
const multi=(a,b)=>{
     return a*b;
}
const remender=(a,b)=>{
    return a%b;
}
// module.exports=add;// for only one function export
module.exports={add,multi,remender};//export as object