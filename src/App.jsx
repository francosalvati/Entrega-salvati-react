import "./App.css";
import Catalogo from "./components/Catalogo/Catalogo";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Catalogo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
