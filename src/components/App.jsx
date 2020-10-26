import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonStyle, setButtonStyle] = useState(false);

  function handleClicked() {
    setHeadingText("Submitted");
  }

  function hoverOver() {
    setButtonStyle(true);
  }

  function hoverOut() {
    setButtonStyle(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonStyle ? "black" : "white" }}
        onClick={handleClicked}
        onMouseOver={hoverOver}
        onMouseOut={hoverOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
