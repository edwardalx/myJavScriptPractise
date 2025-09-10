// import { createElement } from "react"

export function MyCreatElement(element, myText){
const body = document.querySelector(".start")
const myElement = document.createElement(element)
myElement.textContent = myText
myElement.style.color = "red"
body.appendChild(myElement)
console.log("This is my learning react tutorial")
}

export function logWork(){
console.log("This is my learning react tutorial")
}

function myColorText(){
    const bodyText = document.querySelector(".bodyText")
    // bodyText.style.fontSize = "20px"
    // bodyText.style.color = "green"
    if(bodyText.style.color !== "green"){
        bodyText.style.color = "green"
    }
    else{
         bodyText.style.color = ""
          bodyText.style.fontSize = ""
    }
}
const myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
     // MyCreatElement("p","Edward Test")
    myColorText();
    textFunc()
});

const textFunc = ()=>{
let array = [1,3,5,7,9]
array.forEach(element => 
    console.log(element)
);

const newarray = array.map(x=> x+3)
console.log(newarray)
}


