const fetch=async()=>{
    await starttofetch();
    console.log("Fetched!");


}
fetch();
const starttofetch=()=>{
    console.log("Fetching...........")
}

//helps to remove the bydeafault js functionality and we got control over code execution.
const fetch1=async()=>{
    await starttofetch();
    console.log("second");


}
console.log("first");
const starttofetch1=()=>{
    console.log("Fetching...........");
}
console.log("third!");

//async properties cn be only apply on indise that block nut outside the block all will triggered and when callstack got empty then asynch execute.

//parllel execution 
//sequential-used await
