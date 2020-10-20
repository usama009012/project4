import React from "react";
import Button from "./components/inputs/Button";

function App() {
  const Alert=()=>{
    alert("this is a button");
  }
  return (
    <div className="App">
      <Button
        title="click me"
        type="submit"
        buttonColor="btn btn-success"
        onClick={Alert}
      />
      <Button
        title="ok"
        type="submit" 
        buttonColor="btn btn-danger ml-5" />

      <Button title="ok"
       type="submit"
        buttonColor="btn btn-warning ml-5" />
    </div>
  );
}

export default App;
