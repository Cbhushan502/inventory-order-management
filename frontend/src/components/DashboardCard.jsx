function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: "#007bff",
          marginTop: "10px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;