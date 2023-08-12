import { Route, Routes } from "react-router-dom";

import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import DetailedProduct from "./pages/DetailedProduct";
import ProductList from "./pages/ProductList";
import ProductManagement from "./pages/ProductManagement";

function App() {
  return (
    <div className="app">
      <div className="side-bar-grid">
        <SideBar />
      </div>
      <div className="pages-grid">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productmanagement" element={<ProductManagement />} />
          <Route path="detailedproduct" element={<DetailedProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
