import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Greeting } from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
