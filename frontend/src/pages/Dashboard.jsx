import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const [data, setData] = useState({
    total_products: 0,
    total_customers: 0,
    total_orders: 0,
    low_stock_products: 0,
  });

  useEffect(() => {
    api
      .get("/dashboard/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Dashboard Error:", error);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Inventory Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <DashboardCard
          title="Products"
          value={data.total_products}
        />

        <DashboardCard
          title="Customers"
          value={data.total_customers}
        />

        <DashboardCard
          title="Orders"
          value={data.total_orders}
        />

        <DashboardCard
          title="Low Stock"
          value={data.low_stock_products}
        />
      </div>
    </div>
  );
}

export default Dashboard;