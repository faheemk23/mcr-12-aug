import { useContext } from "react";

import { InventoryContext } from "../contexts/InventoryContext";
import "./Pages.css";

export default function Departments() {
  const { inventory } = useContext(InventoryContext);

  const departments =
    inventory?.reduce(
      (acc, { department }) =>
        acc.includes(department) ? acc : [...acc, department],
      []
    ) ?? [];

  return (
    <div className="page">
      {departments.map((department) => (
        <div key={department}>{department}</div>
      ))}
    </div>
  );
}
