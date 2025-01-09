//Install prompt-sync: npm install prompt-sync
const prompt = require("prompt-sync")()    //imports lib



function age(){
let myList = []
while (true){
    console.log("Please enter your age or type 'exit' to quit ")
    const yourAge = prompt("What is your age?: ")
    const myPush =  myList.push(yourAge)
    console.log(myList)
if (yourAge == "exit")
    break
    return myPush
}
}
age();


