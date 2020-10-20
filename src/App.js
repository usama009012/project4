import React from "react";
import Button from "./components/inputs/Button";

function App() {
  return (
    <div className="App">
      <Button title="success" color="success" disabled={true} />
      <Button title="danger" color="danger" />
      <Button title="info" color="info" />
      <Button title="secondary" color="secondary" disabled={true} />
      <Button title="spinner" color="danger" loading={true} />
      <Button title="spinner" color="secondary" loading={true} />
      <Button title="primary" disabled={true} />
      <Button title="warning" color="warning" loading={true} />
    </div>
  );
}

export default App;
