from pydantic import BaseModel


class OrderCreate(BaseModel):
    customer_name: str
    total_amount: float
    status: str
    payment_status: str


class OrderResponse(OrderCreate):
    id: int

    class Config:
        from_attributes = True