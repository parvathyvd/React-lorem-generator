import React, { useState } from "react";
import data from "./data";
const App = () => {
  const [text, setText] = useState([]);
  const [value, setValue] = useState(0);

  const generateText = (num) => {
    let amount = parseInt(num);
    console.log("generate text button clicked", num);
    if (num <= 0) {
      amount = 1;
    }
    if (num > 8) {
      amount = 8;
    }

    // Slice returns a new a array
    setText(data.slice(0, amount));
  };
  const numParaGenerated = (e) => {
    const paragraph = e.target.value;

    console.log("value is", paragraph);
    setValue(paragraph);
  };

  return (
    <section className="text-center mt-2">
      <h2>lorem ipsum project setup</h2>
      <input
        type="number"
        placeholder="Generate text"
        onChange={(e) => {
          numParaGenerated(e);
        }}
        value={value}
      />
      <button
        className="btn"
        onClick={() => {
          generateText(value);
        }}
      >
        Generate!
      </button>
      <div className="lorem-text mt-2">
        {text.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </div>
    </section>
  );
};

export default App;
