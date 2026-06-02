import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const [editingId, setEditingId] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/orders/"
      );

      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const resetForm = () => {
    setCustomerId("");
    setProductId("");
    setQuantity("");
    setEditingId(null);
  };

  const saveOrder = async () => {
    try {
      const orderData = {
        customer_id: Number(customerId),
        product_id: Number(productId),
        quantity: Number(quantity),
      };

      if (editingId) {
        await axios.put(
          `http://127.0.0.1:8000/orders/${editingId}`,
          orderData
        );
      } else {
        await axios.post(
          "http://127.0.0.1:8000/orders/",
          orderData
        );
      }

      fetchOrders();
      resetForm();
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.detail);
      }
    }
  };

  const editOrder = (order) => {
    setEditingId(order.id);

    setCustomerId(order.customer_id);
    setProductId(order.product_id);
    setQuantity(order.quantity);
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/orders/${id}`
      );

      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>
        Orders Management
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="number"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) =>
            setCustomerId(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Product ID"
          value={productId}
          onChange={(e) =>
            setProductId(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
        />

        <button onClick={saveOrder}>
          {editingId
            ? "Update Order"
            : "Add Order"}
        </button>
      </div>

      <table
        border="1"
        width="100%"
        cellPadding="10"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_id}</td>
              <td>{order.product_id}</td>
              <td>{order.quantity}</td>
              <td>{order.total_amount}</td>

              <td>
                <button
                  onClick={() =>
                    editOrder(order)
                  }
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteOrder(order.id)
                  }
                  style={{
                    backgroundColor: "red",
                    color: "white",
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

export default Orders;