from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.order import Order
from app.schemas.order import OrderCreate

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)


@router.get("/")
def get_orders(
    db: Session = Depends(get_db)
):
    return db.query(Order).all()


@router.post("/")
def create_order(
    order: OrderCreate,
    db: Session = Depends(get_db)
):
    db_order = Order(**order.model_dump())

    db.add(db_order)
    db.commit()
    db.refresh(db_order)

    return db_order