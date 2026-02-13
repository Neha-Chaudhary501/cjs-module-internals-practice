//work in lifo form 

const a=()=>{
}
const b=()=>{
    setTimeout(()=>{    
    console.log('function 2');    
 },0);
 console.log('function 1')
}
const c=()=>{
    console.log('function 2');
}
module.exports={a,b,c};