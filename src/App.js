// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import OpenPage from "./OpenPage";
import ClickPage from "./ClickPage";

function App() {
  return (
    <>
      <div className="TopTitle">
        <h1 className="ver">The</h1>
        <h1 className="horezan">Siren</h1>
      </div>

      

      <div className="mainPart">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<OpenPage />} />
        <Route path="/ClickPage/:id" element={<ClickPage /> } />
      </Routes>

      </div>

     
    </>
  );
}

export default App;
