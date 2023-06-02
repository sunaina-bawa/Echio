import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />}></Route>
        <Route path="/product" element={<Sidebar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
