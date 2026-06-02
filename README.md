# Inventory Order Management System

## Overview

A full-stack Inventory Management System built using FastAPI, React, PostgreSQL, Docker, and SQLAlchemy.

The application allows users to manage products, customers, and orders while tracking inventory stock and dashboard statistics.

---

## Features

### Products

* Create Product
* View Products
* Update Product
* Delete Product

### Customers

* Create Customer
* View Customers
* Update Customer
* Delete Customer

### Orders

* Create Orders
* View Orders
* Update Orders
* Delete Orders

### Dashboard

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

### Business Logic

* Automatic order total calculation
* Stock deduction when orders are created
* SKU validation
* Email validation

---

## Tech Stack

Backend:

* FastAPI
* SQLAlchemy
* PostgreSQL

Frontend:

* React
* Axios
* Vite

Containerization:

* Docker
* Docker Compose

---

## Installation

### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Docker Setup

```bash
docker compose up --build
```

Backend:

http://localhost:8000/docs

Frontend:

http://localhost:5173

---

## API Endpoints

### Products

GET /products

POST /products

PUT /products/{id}

DELETE /products/{id}

### Customers

GET /customers

POST /customers

PUT /customers/{id}

DELETE /customers/{id}

### Orders

GET /orders

POST /orders

PUT /orders/{id}

DELETE /orders/{id}

### Dashboard

GET /dashboard

---

## Author

Chandra Bhushan Saran
