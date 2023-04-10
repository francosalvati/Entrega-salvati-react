import "./App.css";
import Catalogo from "./components/Catalogo/Catalogo";
import Details from "./components/Details/Details";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Catalogo />} />
          <Route exact path="/category/:catid" element={<Catalogo />}/>
          <Route exact path="/details/:pid" element={<Details />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
