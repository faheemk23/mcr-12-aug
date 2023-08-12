import { useContext } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import { InventoryContext } from "../contexts/InventoryContext";
import "./Pages.css";

export default function ProductList() {
  const { inventory } = useContext(InventoryContext);

  const filteredInventory = inventory;

  return (
    <div className="page">
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
    </div>
  );
}
