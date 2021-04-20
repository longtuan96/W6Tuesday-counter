import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";
import { useDispatch, useSelector } from "react-redux";
function App() {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE", payload: 5 });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: 5 });
  };

  return (
    <div>
      <Box count={count} />
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
