Promise.resolve(10)
.then((x)=>{
    x+10;
})
.then((x)=>{
    console.log(x);
    return x+20;
})
.then(console.log);
