import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const timeNow = date.getHours();
let greeting;
const greetingStyle = {
  color: ""
};

if (timeNow < 12) {
  greeting = "Morning";
  greetingStyle.color = "red";
} else if (timeNow < 18) {
  greeting = "Afternoon";
  greetingStyle.color = "green";
} else {
  greeting = "Evening";
  greetingStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={greetingStyle}>
      Good {greeting}!
    </h1>
  </div>,
  document.getElementById("root")
);
