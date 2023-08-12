import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { InventoryContext } from "../contexts/InventoryContext";
import "./Pages.css";

export default function Departments() {
  const { inventory, setFilters } = useContext(InventoryContext);

  const navigate = useNavigate();

  const departments =
    inventory?.reduce(
      (acc, { department }) =>
        acc.includes(department) ? acc : [...acc, department],
      []
    ) ?? [];

  return (
    <div className="page flex">
      {departments.map((department) => (
        <div
          className="small-card pointer"
          key={department}
          onClick={() => {
            setFilters((prev) => ({ ...prev, department: department }));
            navigate("/productlist");
          }}
        >
          {department}
        </div>
      ))}
    </div>
  );
}
