import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
const [mode, setMode] = useState('dark')
  return (
    <>
      <Navbar title="rvc" />
      <div className="container">
        <TextForms heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
