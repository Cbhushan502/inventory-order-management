import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/products/"
      );

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(
          `http://127.0.0.1:8000/products/${editingId}`,
          {
            name: formData.name,
            sku: formData.sku,
            price: Number(formData.price),
            stock: Number(formData.stock),
          }
        );

        setEditingId(null);
      } else {
        await axios.post(
          "http://127.0.0.1:8000/products/",
          {
            name: formData.name,
            sku: formData.sku,
            price: Number(formData.price),
            stock: Number(formData.stock),
          }
        );
      }

      setFormData({
        name: "",
        sku: "",
        price: "",
        stock: "",
      });

      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/products/${id}`
      );

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = (product) => {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      sku: product.sku,
      price: product.price,
      stock: product.stock,
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Products Management</h1>

      <form
        onSubmit={saveProduct}
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            backgroundColor: editingId
              ? "orange"
              : "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          {editingId
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>

              <td>
                <button
                  onClick={() =>
                    editProduct(product)
                  }
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;