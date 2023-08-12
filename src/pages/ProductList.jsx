import { useContext } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import ProductListNav from "../components/ProductListNav/ProductListNav";
import { InventoryContext } from "../contexts/InventoryContext";
import "./Pages.css";

export default function ProductList() {
  const { inventory, filters, setFilters } = useContext(InventoryContext);

  const { department, lowStock, sortBy } = filters;

  let filteredInventory = inventory;

  if (department !== "All Departments") {
    filteredInventory = filteredInventory.filter(
      ({ department: departmentToCheck }) => departmentToCheck === department
    );
  }

  if (lowStock) {
    filteredInventory = filteredInventory.filter(({ stock }) => stock <= 10);
  }

  if (sortBy === "Name") {
    filteredInventory = [...filteredInventory].sort(
      (a, b) =>
        a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0)
    );
  } else {
    filteredInventory = [...filteredInventory].sort(
      (a, b) => a[sortBy.toLowerCase()] - b[sortBy.toLowerCase()]
    );
  }

  return (
    <div className="page">
      <ProductListNav filters={filters} setFilters={setFilters} />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      {filteredInventory.length === 0 && <h2>Sorry, no products match!</h2>}
    </div>
  );
}
