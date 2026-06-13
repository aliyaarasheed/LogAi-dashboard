from fastapi import FastAPI

from app.core.database import Base, engine

from app.routes.products import router as product_router
from app.routes.dashboard import router as dashboard_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Product Management Dashboard API"
)

app.include_router(product_router)
app.include_router(order_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "API Running Successfully"
    }