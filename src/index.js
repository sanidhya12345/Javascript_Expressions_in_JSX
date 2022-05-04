import react from "react";

import ReactDOM from "react-dom";

const fname = "Sanidhya";
const lname = "Varshney";
const myluckynumber = 3;
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`} !</h1>
    <p> Your Lucky Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
