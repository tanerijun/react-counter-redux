import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Counter App with React and Redux</p>
      <p>
        <button type="button">count is: {counter}</button>
      </p>
    </div>
  );
}

export default App;
