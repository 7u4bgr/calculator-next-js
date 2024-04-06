"use client";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqualsClick = () => {
    try {
      const expression = input.includes("%") ? parseFloat(input) / 100 : input;
      setResult(eval(expression));
    } catch (error) {
      setResult("Hata");
    }
  };

  const handleClearClick = () => {
    setInput("");
    setResult("");
  };

  return (
    <main className={styles.background}>
      <div className={styles.input}>
        <h2>{input}</h2>
        <h2>{result}</h2>
      </div>
      <div className={styles.keyboards}>
        <div className={styles.list1}>
          <button onClick={() => handleClearClick()}>AC</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button
            className={styles.yellowbutton}
            onClick={() => handleClick("/")}
          >
            /
          </button>
        </div>
        <div className={styles.list2}>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button
            onClick={() => handleClick("*")}
            className={styles.yellowbutton}
          >
            X
          </button>
        </div>
        <div className={styles.list2}>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button
            onClick={() => handleClick("-")}
            className={styles.yellowbutton}
          >
            -
          </button>
        </div>
        <div className={styles.list2}>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button
            onClick={() => handleClick("+")}
            className={styles.yellowbutton}
          >
            +
          </button>
        </div>
        <div className={styles.list3}>
          <button className={styles.zerobutton} onClick={() => handleClick(0)}>
            0
          </button>
          <button onClick={() => handleClick(".")}>.</button>
          <button
            onClick={() => handleEqualsClick()}
            className={styles.yellowbutton}
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
}
