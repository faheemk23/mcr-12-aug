import { useContext, useState } from "react";
import { InventoryContext } from "../contexts/InventoryContext";
import "./Pages.css";

export default function ProductManagement() {
  const [userInput, setUserInput] = useState({
    department: "Select Department",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1691516455/placeholder-rgb-color-icon-vector-32173552_vbbhay.jpg",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const { inventory, setInventory } = useContext(InventoryContext);

  let departments =
    inventory?.reduce(
      (acc, { department }) =>
        acc.includes(department) ? acc : [...acc, department],
      []
    ) ?? [];

  departments = ["Select Department", ...departments];

  const handleFieldInput = (e) => {
    const field = e.target.id;
    setUserInput((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validateField = (field) => {
    if (field === "department") {
      if (userInput[field] === "Select Department") {
        setErrorMessage("Please select a department!");
        return false;
      } else {
        return true;
      }
    } else {
      if (`${userInput[field]}`.trim() === "") {
        setErrorMessage(
          `Please enter the ${field !== "imageUrl" ? field : "image URL"}!`
        );
        return false;
      } else {
        return true;
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(userInput).every((field) =>
      validateField(field)
    );
    if (isValid) {
      setErrorMessage("");
      setInventory((prev) => [
        ...prev,
        {
          ...userInput,
          price: parseInt(userInput.price),
          stock: parseInt(userInput.stock),
          delivered: parseInt(userInput.delivered),
        },
        setUserInput({
          department: "Select Department",
          name: "",
          description: "",
          price: 0,
          stock: 0,
          sku: "",
          supplier: "",
          delivered: 0,
          imageUrl:
            "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1691516455/placeholder-rgb-color-icon-vector-32173552_vbbhay.jpg",
        }),
      ]);
    }
  };

  console.log({ userInput });
  return (
    <div className="page ">
      <h1>Add New Product</h1>
      <form className="add-product-form" onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <label htmlFor="department">Department:</label>
        <select id="department" onChange={handleFieldInput}>
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={userInput.name}
          onChange={handleFieldInput}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          rows="3"
          id="description"
          value={userInput.description}
          onChange={handleFieldInput}
        ></textarea>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={userInput.price}
          onChange={handleFieldInput}
        />
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          value={userInput.stock}
          onChange={handleFieldInput}
        />
        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          value={userInput.sku}
          onChange={handleFieldInput}
        />
        <label htmlFor="supplier">Supplier</label>
        <input
          type="text"
          id="supplier"
          value={userInput.supplier}
          onChange={handleFieldInput}
        />
        <label htmlFor="delivered">Delivered</label>
        <input
          type="number"
          id="delivered"
          disabled={true}
          value={userInput.delivered}
          onChange={handleFieldInput}
        />
        <label htmlFor="imageUrl">
          Image URL: (placeholder added by default)
        </label>
        <input
          type="text"
          id="imageUrl"
          value={userInput.imageUrl}
          onChange={handleFieldInput}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}
