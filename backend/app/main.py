from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "API Running"}


@app.get("/products")
def get_products():
    return [
        {
            "id": 1,
            "name": "Laptop",
            "sku": "LAP001",
            "price": "₹55,000",
            "stock": 15
        },
        {
            "id": 2,
            "name": "Mouse",
            "sku": "MOU001",
            "price": "₹800",
            "stock": 45
        },
        {
            "id": 3,
            "name": "Keyboard",
            "sku": "KEY001",
            "price": "₹1,500",
            "stock": 20
        }
    ]


@app.get("/orders")
def get_orders():
    return [
        {
            "id": 1001,
            "customer": "John Doe",
            "amount": "₹12,000",
            "status": "Delivered"
        },
        {
            "id": 1002,
            "customer": "Sarah",
            "amount": "₹8,500",
            "status": "Pending"
        }
    ]


@app.get("/dashboard")
def get_dashboard():
    return {
        "totalProducts": 120,
        "totalOrders": 450,
        "revenue": "₹5,20,000",
        "lowStock": 8
    }