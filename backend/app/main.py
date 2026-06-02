from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine

# Import Models
from app.models.product import Product
from app.models.customer import Customer
from app.models.order import Order

# Import Routers
from app.routes.products import router as product_router
from app.routes.customers import router as customer_router
from app.routes.orders import router as order_router
from app.routes.dashboard import router as dashboard_router

# Create Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Inventory Management System",
    description="Inventory & Order Management API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://inventory-order-management-weld.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)
app.include_router(dashboard_router)


@app.get("/")
def home():
    return {
        "message": "Inventory Management API"
    }