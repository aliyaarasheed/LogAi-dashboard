from sqlalchemy import Column, Integer, String, Float, Boolean
from app.core.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    sku = Column(String, unique=True, nullable=False)

    category = Column(String)

    price = Column(Float)

    stock = Column(Integer)

    image_url = Column(String)

    is_active = Column(Boolean, default=True)