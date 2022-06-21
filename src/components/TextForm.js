import React ,{useState} from 'react'


export default function TextForm(props) {
   const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText);
  //  props.showAlert(" Text Converted to Uppercase","primary");
 }

    const handleLowClick= ()=>{
      let newText= text.toLowerCase();
      setText(newText);
    //props.showAlert(" Text Converted to Lowercase","primary");

    }
 const handleClear=()=>
 {
    let newText="";
    setText(newText);
  //  props.showAlert(" Text Cleared","primary");

 }

  const handleRepeat=()=>
  {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  //  props.showAlert(" Text Copied","primary");

  }
 const handleOnChange=(event)=>{
  //  console.log(";clicked on change");
    setText(event.target.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  

  return (
    <>
    <div className='container ' style={{color: props.mode==='dark'?'white':'black' }} > 
    <h4>{props.heading}</h4>
  <div className="form-group" >
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.color}}  id="myBox" rows="6"></textarea>

    {/*<textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'grey',backgroundColor:  props.mode==='dark'?'#1b2e4d':'white'}}  id="myBox" rows="6"></textarea>*/}
  </div>
 
    <button className="btn btn-secondary m-3 "  onClick = {handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-secondary m-3"  onClick = {handleLowClick} >Convert to Lowercase</button>
    <button className="btn btn-secondary m-3"  onClick = {handleClear} >Clear</button>
    <button className="btn btn-secondary m-3"  onClick = {handleRepeat} >Copy</button>
    <button className="btn btn-secondary m-3"  onClick = {handleExtraSpaces} >Remove Extra spaces</button>
   
    </div>
    
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black' }}>
      <h5>Info of your text</h5>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length } characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h5>Preview</h5>
      <p>{text.length>0?text:'Enter something to preview'}</p>
    </div>

</>
  )
}

