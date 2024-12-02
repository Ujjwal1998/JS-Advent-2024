import React, { useRef, useState } from "react";
import lockIcon from "./assets/lock.svg";
import eyeIcon from "./assets/eye.svg";
import "./App.css";
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  function handleReveal() {
    if (inputRef.current) {
      if (inputRef.current.type === "text") {
        inputRef.current.type = "password";
        setIsHidden(true);
      } else {
        inputRef.current.type = "text";
        setIsHidden(false);
      }
    }
  }

  return (
    <>
      <h1>Password Input</h1>
      <div className={`input ${isHidden ? "" : "revealed"}`}>
        <div className="lock-icon">
          <img src={lockIcon} alt="" className="lock-icon" />
        </div>
        <div className="divider"></div>
        <div className="password">
          <input
            type="text"
            className={`password-input ${isHidden ? "" : "revealed"}`}
            ref={inputRef}
          />
        </div>
        <div className="reveal" onClick={handleReveal}>
          <img
            src={eyeIcon}
            alt=""
            className="eye-icon"
            // onClick={handleReveal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
