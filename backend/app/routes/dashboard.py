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


@@router.get("/")
def dashboard_summary(db: Session = Depends(get_db)):
    products = db.query(Product).all()
    customers = db.query(Customer).all()
    orders = db.query(Order).all()

    return {
        "product_count": len(products),
        "customer_count": len(customers),
        "order_count": len(orders),
        "products": [p.name for p in products],
        "customers": [c.name for c in customers]
    }