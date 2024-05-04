import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  
  return (
    <Routes>
      <Route path="/" element={<Home apiKey={apiKey} />} />
    </Routes>
  );
}

export default App;
