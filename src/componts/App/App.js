import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { useState} from "react";
import Details from "../Details/Details";
function App() {
  const apiKey =  "430d8dd6350f4665a3c4e3faf8b99797"
  //process.env.REACT_APP_API_KEY;
  const [article, setArticle] = useState({})
  return (
    <Routes>
      <Route path="/" element={<Home apiKey={apiKey} setArticle ={setArticle} />} />
      <Route path="/details/:article" element = {<Details article ={article}/>}/>
    </Routes>
  );
}

export default App;
