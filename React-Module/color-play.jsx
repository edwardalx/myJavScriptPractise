import { useState } from "react";
import '../Modules/index.css'

export default function ColorPlay(){
   
 const [isGreen, setIsGreen] = useState(false)
 const [myText, setMyText] = useState([])

const handleClick = ()=>{
    setIsGreen(!isGreen)
    setMyText(" All shall past ")
    // setMyText([...myText,<h1 key={myText.length}>All shall pass</h1>])
    //  console.log("This is my learning React tutorial");
 }
const  handleStyle =()=>{
    if (isGreen) {
        return {color:"green", fontSize:"20px"}
        
    } else {
       return { }}
 }

 return(
    <>
        <div className="start">
         <span className="bodyText" style={handleStyle()}> This is my color play example</span>
         {/* <p>{myText}</p> */}
        <div><h1>{isGreen? myText:[]}</h1></div>
        

        <input type="button" id="button" value="Click Me" onClick={handleClick}></input>
    </div>
    </>
    
 )

}