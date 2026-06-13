from pydantic import BaseModel


class ProductCreate(BaseModel):
    name: str
    sku: str
    category: str
    price: float
    stock: int
    image_url: str


class ProductResponse(ProductCreate):
    id: int
    is_active: bool

    class Config:
        from_attributes = True