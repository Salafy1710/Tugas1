import { useState } from "react";

export default function AlertButton({ text, message }) {
  const [paragraphText, setParagraphText] = useState("Pasti ada yang berubah");

  function handleClick() {
    if (paragraphText === message) {
      setParagraphText("Noh kan berubah");
    } else {
      setParagraphText(message);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>

      <p id="text">{paragraphText}</p>
    </div>
  );
}