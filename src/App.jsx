import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Home } from "./pages";
import useScore from "./store/useScore";

function App() {
  const dark = useScore((state) => state.dark);
  const setDark = useScore((state) => state.switchMode);
  return (
    <div className="container">
      {dark ? (
        <button onClick={setDark}>light</button>
      ) : (
        <button onClick={setDark}>dark</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div style={{ backgroundColor: dark ? "#000" : "#fff" }}>
              not found page
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
