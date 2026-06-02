from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.product import Product
from app.models.customer import Customer
from app.models.order import Order

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard_summary(db: Session = Depends(get_db)):
    products = db.query(Product).count()
    customers = db.query(Customer).count()
    orders = db.query(Order).count()

    return {
        "debug": "new_version",
        "total_products": products,
        "total_customers": customers,
        "total_orders": orders,
        "low_stock_products": db.query(Product).filter(Product.stock < 10).count()
    }