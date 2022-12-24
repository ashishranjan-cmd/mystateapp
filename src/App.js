function App(){

  let isLineT = false;

  const myLTdata = { textDecoration: "line-through" };

  return <p style={ isLineT? myLTdata : null }> This is paragraph</p>
}

export default App