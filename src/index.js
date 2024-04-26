import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200/300";
const name = "Arcofintech";

ReactDOM.render(
  <div>
    <h1 className="heading">Images</h1>
    <img src={img} />
    <p>Hello "{name}"</p>
  </div>,
  document.getElementById("root")
);
