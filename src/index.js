import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import QrcodeEditor from "./qrcodeEditor";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Developers" />
    <h2>This is a simple example to generate OR code {"\u2728"}</h2>
    <QrcodeEditor />
  </div>
);

render(<App />, document.getElementById("root"));
