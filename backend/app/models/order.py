from sqlalchemy import Column, Integer, String, Float
from app.core.database import Base


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)

    customer_name = Column(String, nullable=False)

    total_amount = Column(Float)

    status = Column(String)

    payment_status = Column(String)