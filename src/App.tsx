import { useState } from "react";
import Popup from "./components/Popup";
import reactLogo from "./assets/react.svg";
import { Helmet } from "react-helmet"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <Helmet>
        {showPopup ? <body className="overflow-hidden" /> : <body className="overflow-auto" />}
      </Helmet>
      <div className="flex flex-col items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowPopup(true)}>Show Popup</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {showPopup && <Popup setShowPopup={setShowPopup as Function} />}
    </div>
  );
}

export default App;
