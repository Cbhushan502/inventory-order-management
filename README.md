# Inventory & Order Management System

## Overview

A full-stack Inventory & Order Management System built using FastAPI, React, PostgreSQL, Docker, and Docker Compose.

The application allows businesses to:

* Manage Products
* Manage Customers
* Create and Track Orders
* Track Inventory
* Monitor Dashboard Statistics

---

## Technology Stack

### Backend

* Python
* FastAPI
* SQLAlchemy

### Frontend

* React
* Vite
* Axios

### Database

* PostgreSQL

### Containerization

* Docker
* Docker Compose

### Deployment

* Render (Backend)
* Vercel (Frontend)

---

## Features

### Product Management

* Create Product
* View Products
* Update Product
* Delete Product

### Customer Management

* Create Customer
* View Customers
* Update Customer
* Delete Customer

### Order Management

* Create Order
* View Orders
* Update Orders
* Delete Orders

### Dashboard

Displays:

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

---

## Business Rules

* Product SKU must be unique
* Customer Email must be unique
* Product quantity cannot be negative
* Orders cannot exceed available stock
* Stock automatically decreases after order creation
* Order total amount is automatically calculated

---

## Project Structure

backend/
frontend/
docker-compose.yml

---

## Local Setup

### Clone Repository

git clone <repository-url>

### Start Application

docker-compose up --build

### Backend

http://localhost:8000

### Frontend

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

## Deployment

### Frontend

https://inventory-order-management-weld.vercel.app

### Backend

https://inventory-order-management-i3ay.onrender.com

---

## Author

Chandra Bhushan Saran
Software Engineer
