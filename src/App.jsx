import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home, Interests, Projects, Resume } from "./Components/Pages/";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/navbar" element={<Home />}></Route>
        <Route path="/navbar/interests" element={<Interests />}></Route>
        <Route path="/navbar/projects" element={<Projects />}></Route>
        <Route path="/navbar/resume" element={<Resume />}></Route>
      </Routes>
    </div>
  );
}

export default App;
