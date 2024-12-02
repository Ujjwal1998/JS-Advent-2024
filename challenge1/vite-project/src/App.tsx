import React, { useRef, useState } from "react";
import { Lock } from "./components/lock";
import { Eyeball } from "./components/Eyeball";
import "./App.css";
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isReveal, setIsReveal] = useState(false);
  function handleReveal() {
    if (inputRef.current) {
      if (inputRef.current.type === "text") {
        inputRef.current.type = "password";
      } else {
        inputRef.current.type = "text";
      }
      setIsReveal(() => !isReveal);
    }
  }

  return (
    <div className="App">
      <h1>Password Input</h1>
      <div className={`container ${isReveal ? "revealed" : ""}`}>
        <Lock></Lock>
        <input
          type={`${!isReveal ? "password" : "text"}`}
          className={`password-input`}
          ref={inputRef}
        />
        <button className="reveal" onClick={handleReveal}>
          <Eyeball></Eyeball>
        </button>
      </div>
    </div>
  );
}

export default App;
