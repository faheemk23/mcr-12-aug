import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="side-bar">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/departments">Departments</NavLink>
      <NavLink to="productlist">Products</NavLink>
    </div>
  );
}
