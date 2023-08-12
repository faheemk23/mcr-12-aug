import { createContext, useEffect, useRef, useState } from "react";

import { inventoryData } from "../data/data";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(inventoryData);
  const [filters, setFilters] = useState({
    department: "All Departments",
    lowStock: false,
    sortBy: "Name",
  });

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const filters = JSON.parse(localStorage.getItem("filters"));
      const inventory = JSON.parse(localStorage.getItem("inventory"));

      if (filters) {
        setFilters(filters);
      }
      if (inventory) {
        setInventory(inventory);
      }
      firstRender.current = false;
    }

    localStorage.setItem("filters", JSON.stringify(filters));
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [filters, inventory]);

  // useEffect(() => {
  //   localStorage.setItem("filters", JSON.stringify(filters));
  //   localStorage.setItem("inventory", JSON.stringify(inventory));
  // }, [filters, inventory]);

  return (
    <InventoryContext.Provider
      value={{ inventory, setInventory, filters, setFilters }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
