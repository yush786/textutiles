import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
      setText(newtext);
      props.showalert("(converted to Uppercase)", "warning");
        
        
    };
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
      setText(newtext);
      props.showalert("converted to Lowercase", "warning");
      
    
    };
    const handleCopyclick = () => {
      // console.log("copy was clicked" + text);
      console.log("i am copy");
      var text = document.getElementById("my box");
      // text.ariaSelected();

      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showalert("Copied to Clipboard!", "success");
        // alert("Text Copied");
  };
  const handleClearclick = () => {
    let newtext = " ";
    setText(newtext)
  }
   
    

    const handleOnChange = (event) => {
    //   console.log("On change");
      setText(event.target.value);
    };
    
   
    const [text, setText] = useState("Enter text here");
    
    // text = "new Text"; wrong way to change text variable
    // setText("new Text"); // correct way to change text variable
    
  // text eek variable hai  usme jo value hai wo store hoti hai jaise "Enter text here" hai abhi .
  // setText eek function hai jo text variable ki value ko change karne ke liye use hota hai

  // text eek state variable hai jo React me useState hook se banaya gaya hai
  // setText eek function hai jo text variable ki value ko change karne ke liye use hota hai
   
    return (
      <>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "#4e4ea2",
          }}
          style1={{
            color: props.mode === "red" ? "white" : "#e21010ff",
          }}
          style2={{
            color: props.mode === "green" ? "white" : " #07ad1aff",
          }}
        >
          <h1 className="mb-4">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={
                // ye eek object hai javascript me
                {
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#4e4ea2",
                }
              }
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleUpclick}
          >
            Convert To UpperCase
          </button>
          <button
            disabled={!text || text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleLowClick}
          >
            Convert To lowerCase
          </button>
          <button
            disabled={!text || text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleCopyclick}
          >
            Copy Text
          </button>
          <button
            disabled={!text || text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleClearclick}
          >
            Clear Text
          </button>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "#4e4ea2",
          }}
        >
          <h2>Your text Summary</h2>
          <p>
            {
              text.split(" ").filter((element) => element.trim().length !== 0)
                .length
            }
            <b>words and</b> {text.length} <b>characters</b>
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => element.trim().length !== 0)
                .length}{" "}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0 ? text : "enter something to  preview it here"}
          </p>
        </div>
      </>
    );
}
