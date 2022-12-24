let isLineT = false;

function swapval(){
  isLineT = true;
}

function App(){

  // let isLineT = true;

  const myLTdata = { textDecoration: "line-through" };

  return (
  <div>
    <p style={ isLineT? myLTdata : null }> This is paragraph</p>
    <button onClick = { swapval }>Click Here</button>
  </div>)
}

export default App