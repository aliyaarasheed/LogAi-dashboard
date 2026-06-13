from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.product import Product
from app.models.order import Order

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db)
):
    total_products = db.query(Product).count()

    active_products = (
        db.query(Product)
        .filter(Product.is_active == True)
        .count()
    )

    low_stock = (
        db.query(Product)
        .filter(Product.stock < 10)
        .count()
    )

    total_orders = db.query(Order).count()

    return {
        "total_products": total_products,
        "active_products": active_products,
        "low_stock": low_stock,
        "total_orders": total_orders
    }