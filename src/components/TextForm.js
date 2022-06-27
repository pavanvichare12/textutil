import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const HandleupClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper Case", "Success");
  }
  const HandleloClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower Case", "Success");
  }
  const HandleClrClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "Success");
  }
  const HandleonChange = (event)=>{
    setText(event.target.value);
  }
  const HandleCopy = () =>{
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "Success");
  }
  const RemoveExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces", "Success");
  }
  return (
    <>
    <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
   </div>
   <div className="mb-3">
     <textarea className="form-control" value={text} onChange={HandleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
   </div>
   <button disabled={text.length === 0} className='btn-primary btn mx-2 my-2' onClick={HandleupClick}>Convert to uppercase</button>
   <button disabled={text.length === 0} className='btn-primary btn mx-2 my-2' onClick={HandleloClick}>Convert to lowercase</button>
   <button disabled={text.length === 0} className='btn-primary btn mx-2 my-2' onClick={HandleClrClick}>Clear Text</button>
   <button disabled={text.length === 0} className='btn-primary btn mx-2 my-2' onClick={HandleCopy}>Copy Text</button>
   <button disabled={text.length === 0} className='btn-primary btn mx-2 my-2' onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
   <div className='container my-4' style={{color: props.mode === 'dark'?'white':'black'}}>
     <h1>Your Text Summary</h1>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
     <p className='my-2'>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} this much time it will take to read the current content</p>
     <h2 className='my-3'>Preview of above text</h2>
     <p className='my-2' style={{'whiteSpace':'normal'}}>{text}</p>
   </div>
    </>
  )
}
