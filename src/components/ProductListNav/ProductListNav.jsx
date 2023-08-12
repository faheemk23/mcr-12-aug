import { useNavigate } from "react-router-dom";
import "./ProductListNav.css";

export default function ProductListNav({ filters, setFilters }) {
  const navigate = useNavigate();

  const { department, lowStock, sortBy } = filters;
  const departments = ["All Departments", "Kitchen", "Clothing", "Toys"];

  const sortDropdown = ["Name", "Price", "Stock"];

  const handleFilterInput = (e) => {
    const field = e.target.id;
    if (field === "lowStock") {
      setFilters((prev) => ({ ...prev, [field]: !prev[field] }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };

  console.log({ filters });

  return (
    <div className="product-list-nav">
      <h1>Products</h1>
      <select id="department" value={department} onChange={handleFilterInput}>
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>
      <div>
        <input
          type="checkbox"
          id="lowStock"
          value={lowStock}
          checked={lowStock}
          onChange={handleFilterInput}
        />
        <label htmlFor="low-stock-checkbox">Low Stock Items</label>
      </div>
      <select id="sortBy" value={sortBy} onChange={handleFilterInput}>
        {sortDropdown.map((sortBy) => (
          <option key={sortBy} value={sortBy}>
            {sortBy}
          </option>
        ))}
      </select>
      <button onClick={() => navigate("/productmanagement")}>New</button>
    </div>
  );
}
