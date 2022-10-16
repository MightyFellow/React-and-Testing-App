import React, { useState, useRef } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const [upperCaseText, setUpperCaseText] = useState("");
  const [email, setEmail] = useState("");

  const textArea = useRef();

  const fixTheBug = () => {
    if (upperCaseText.length === 0) {
      return 0;
    } else {
      return upperCaseText.split(" ").length;
    }
  };

  const convertText = (e) => {
    e.preventDefault();
    let newText = upperCaseText.toUpperCase();
    setUpperCaseText(newText);
    textArea.current.focus();
    showAlert("Converted to uppercase!", "success");
  };

  const convertTextLower = (e) => {
    e.preventDefault();
    let text = upperCaseText.toLowerCase();
    setUpperCaseText(text);
    textArea.current.focus();
    showAlert("Converted to lowercase!", "success");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    let email = upperCaseText.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    );
    setEmail(email);
    showAlert("Extracted email from the text!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: mode === "dark" ? "white" : "#042743" }}
      >
        <div className="mb-3">
          <label
            htmlFor="myText"
            className={`form-label text-${mode === "dark" ? "light" : "white"}`}
          >
            {heading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="3"
            value={upperCaseText}
            ref={textArea}
            onChange={(e) => setUpperCaseText(e.target.value)}
            style={{
              backgroundColor: mode === "dark" ? "#042743" : "white",
              color: mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>{" "}
          <br />
          <button className="btn btn-primary mx-2" onClick={convertText}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={convertTextLower}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleEmail}>
            Extract email from the text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: mode === "dark" ? "#042743" : "white",
          color: mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {fixTheBug} words and {upperCaseText.length} characters
        </p>
        <p>{0.008 * upperCaseText.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {upperCaseText.length > 0
            ? upperCaseText
            : "Enter something in the textbox above to preview here"}
        </p>
        <p>The email extracted:{email}</p>
      </div>
    </>
  );
}
