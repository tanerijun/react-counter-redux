import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [n, setN] = useState(2);

  const handleInc = () => {
    dispatch({ type: "counter/inc" });
  };

  const handleDec = () => {
    dispatch({ type: "counter/dec" });
  };

  const handleIncByN = () => {
    dispatch({ type: "counter/incByN", payload: n });
  };

  const handleDecByN = () => {
    dispatch({ type: "counter/decByN", payload: n });
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Counter App with React and Redux</h2>
      <p>The current count is: {counter}</p>
      <div>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
      </div>
      <input
        type="number"
        placeholder="n"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
      />
      <div>
        <button onClick={handleIncByN}>Inc by n</button>
        <button onClick={handleDecByN}>Dec by n</button>
      </div>
    </div>
  );
}

export default App;
