import { useContext } from "react";

import { InventoryContext } from "../contexts/InventoryContext";
import "./Pages.css";
import { getDashboardData } from "./utilities/utilities";

export default function Dashboard() {
  const { inventory } = useContext(InventoryContext);

  const data = getDashboardData(inventory);

  const { totalStock, totalDelivered, lowStockItems } = data ?? {};

  return (
    <div className="page flex">
      <div className="small-card">
        {totalStock}
        <div>Total Stock</div>
      </div>
      <div className="small-card">
        {totalDelivered}
        <div>Total Delivered</div>
      </div>
      <div className="small-card">
        {lowStockItems}
        <div>Low Stock Items</div>
      </div>
    </div>
  );
}
