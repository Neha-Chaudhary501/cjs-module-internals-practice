//buildin module in node.js and help in making server and it provides security
const http=require("http");
const server=http.createServer((req,res)=>{
    //end means sending response
    const reqUrl=req.url;
    console.log("URL",reqUrl);
    res.end("hello");
})
server.listen(3000);