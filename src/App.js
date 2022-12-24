import { useState } from "react";

// let isLineT = false;

// function swapval(){
//  isLineT = true;
// }

function App(){

  let isLineT = true;

  const myLTdata = { textDecoration: "line-through" };

  return (
  <div>
    <p style={ isLineT? myLTdata : null }> This is paragraph</p>
    <button onClick = { myLTdata }>Click Here</button>
  </div>)
}

function Myc(){
  var[myvalue,myf] = useState(1);

  function grepval(){
    myf( myvalue + 1)
    console.log(myvalue)
  }
  
  return (
  <div>
    <h1> { myvalue }</h1>
    <button onClick={grepval}>Click here</button>
  </div>)

}
export default App
export {Myc}