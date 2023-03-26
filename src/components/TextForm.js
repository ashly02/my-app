import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       console.log("Uppercase Button was clicked"+text)
       let newText= text.toUpperCase();
       setText(newText)
    }
    const handlelowClick=()=>{
        console.log("lowercase Button was clicked"+text)
        let newText= text.toLowerCase();
        setText(newText)
     }
     const handleClearClick=()=>{
        
        let newText= '';
        setText(newText)
     }
    const handleOnChange=(event)=>{
        console.log("On change") 
        setText(event.target.value)
     }
    const [text,setText] = useState("");
   // setText("new text")
  const handleCopy=()=>{
    let text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
  }

   return (
        <>
         <div className="conatainer">


     
      <h4>{props.heading}</h4>
  <div className="mb-3 form-check">
    <textarea className="form-control" id="myBox" rows='8' onChange={handleOnChange} value={text}></textarea>
  </div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert To lowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text!</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text!</button>
    </div>
    <div className="container my-4"></div>
    <h4>Text Summary</h4>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h4>PREVIEW</h4>
    <p>{text}</p>
</> 
 )
}
