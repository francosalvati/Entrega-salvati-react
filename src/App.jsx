import "./App.css";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { CartContainer } from "./pages/CartContainer/CartContainer";
import { ProductsContainer } from "./pages/ProductsContainer/ProductsContainer";
import { DetailsContainer } from "./pages/DetailsContainer/DetailsContainer";
import SideBar from "./components/SideBar/SideBar";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { ComprasContainer } from "./pages/Compras/Compras";


function App() {
  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Toolbar />
          <div className="layout">
            <SideBar />
            <Routes>
              <Route exact path="/" element={<ProductsContainer />} />
              <Route exact path="/:pid" element={<ProductsContainer />} />
              <Route exact path="/details/:id" element={<DetailsContainer />} />
              <Route exact path="/cart" element={<CartContainer />} />
              <Route exact path="/compras" element={<ComprasContainer />} />
            </Routes>
          </div>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
