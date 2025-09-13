// import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#4e4ea2";
      showalert("Dark mode has been enabled", "warning");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showalert("Light mode has been enabled", "warning");
    }
  };

  const redMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#f04b4bff";
      showalert("Red mode has been enabled", "warning");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showalert("Light mode has been enabled", "warning");
    }
  };

  const greenMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#07ad1aff";
      showalert("Green mode has been enabled", "warning");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showalert("Light mode has been enabled", "warning");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          titles="TextUtiles"
          aboutText="About TextUtiles"
          mode={mode}
          toggleMode={toggleMode}
          redMode={redMode}
          greenMode={greenMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showalert={showalert}
                  heading="Textutiles-Word Counter,Character Counter"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
