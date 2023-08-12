import { Link } from "react-router-dom";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { name, description, price, stock, supplier, imageUrl } = product;
  return (
    <tr className="product">
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>
        <Link to="#">{name}</Link>
      </td>
      <td>{description}</td>
      <td>${price}</td>
      <td>{stock}</td>
      <td>{supplier}</td>
    </tr>
  );
}
