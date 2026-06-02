# Inventory & Order Management System

A full-stack Inventory & Order Management System built using FastAPI, React, PostgreSQL, Docker, and deployed on Render & Vercel.

---

# Live Demo

## Frontend

https://inventory-order-management-weld.vercel.app

## Backend API

https://inventory-order-management-i3ay.onrender.com

## Swagger Documentation

https://inventory-order-management-i3ay.onrender.com/docs

## ReDoc Documentation

https://inventory-order-management-i3ay.onrender.com/redoc

---

# Technology Stack

## Backend

* Python 3.11
* FastAPI
* SQLAlchemy
* PostgreSQL
* Pydantic

## Frontend

* React
* Vite
* Axios

## DevOps & Deployment

* Docker
* Docker Compose
* Render
* Vercel
* GitHub

---

# Project Architecture

```text
React Frontend
      |
      v
FastAPI Backend
      |
      v
PostgreSQL Database
```

---

# Features

## Product Management

* Create Product
* View Products
* Update Product
* Delete Product

## Customer Management

* Create Customer
* View Customers
* Update Customer
* Delete Customer

## Order Management

* Create Order
* View Orders
* Update Orders
* Delete Orders

## Dashboard

Displays:

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

---

# Business Rules

* Product SKU must be unique
* Customer Email must be unique
* Product quantity cannot be negative
* Orders cannot exceed available stock
* Stock automatically decreases after order creation
* Order total amount is automatically calculated

---

# API Endpoints

## Products

GET /products

GET /products/{id}

POST /products

PUT /products/{id}

DELETE /products/{id}

---

## Customers

GET /customers

GET /customers/{id}

POST /customers

PUT /customers/{id}

DELETE /customers/{id}

---

## Orders

GET /orders

GET /orders/{id}

POST /orders

PUT /orders/{id}

DELETE /orders/{id}

---

## Dashboard

GET /dashboard

---

# Docker Setup

## Clone Repository

```bash
git clone https://github.com/Cbhushan502/inventory-order-management.git

cd inventory-order-management
```

## Run With Docker

```bash
docker-compose up --build
```

---

# Local URLs

## Frontend

http://localhost:5173

## Backend

http://localhost:8000

## Swagger Docs

http://localhost:8000/docs

## ReDoc

http://localhost:8000/redoc

---

# Environment Variables

## Frontend (.env)

```env
VITE_API_URL=https://inventory-order-management-i3ay.onrender.com
```

---

# Docker Services

* frontend
* backend
* postgres

---

# Deployment

## Frontend (Vercel)

https://inventory-order-management-weld.vercel.app

## Backend (Render)

https://inventory-order-management-i3ay.onrender.com

---

# Author

Chandra Bhushan Saran

Software Engineer
