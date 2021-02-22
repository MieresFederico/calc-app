/* eslint-disable no-eval */
import React, { useState } from "react";
import words from "lodash.words";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";

const clickHandlerDelete = (stack, setStack) => {
  if (stack.length) {
    const newStack = stack.substring(0, stack.length - 1);
    setStack(newStack);
  }
};

const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length ? items[items.length - 1] : "0";

  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers onClickNumber={(number) => setStack(`${stack}${number}`)} />
      <Functions
        onContentClear={() => setStack("")}
        onDelete={() => clickHandlerDelete(stack, setStack)}
      />
      <MathOperations
        onClickOperation={(operation) => setStack(`${stack}${operation}`)}
        onClickEqual={() => setStack(eval(stack).toString())}
      />
    </main>
  );
};

export default App;
