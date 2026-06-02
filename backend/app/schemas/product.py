from pydantic import BaseModel, Field


class ProductCreate(BaseModel):
    name: str = Field(..., min_length=1)
    sku: str
    price: float
    stock: int


class ProductResponse(BaseModel):
    id: int
    name: str
    sku: str
    price: float
    stock: int

    class Config:
        from_attributes = True