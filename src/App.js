import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Product from "./Component/Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
