import { createContext, useState } from "react";

import { inventoryData } from "../data/data";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(inventoryData);
  const [filters, setFilters] = useState({
    department: "All Departments",
    lowStock: false,
    sortBy: "Name",
  });

  return (
    <InventoryContext.Provider
      value={{ inventory, setInventory, filters, setFilters }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
