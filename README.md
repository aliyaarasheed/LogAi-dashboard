# LogAI Dashboard

## Overview

LogAI Dashboard is a Product Management and Order Management Dashboard built using React, TypeScript, Tailwind CSS, Recharts, and FastAPI.

## Features

### Dashboard

* Dashboard Analytics
* Revenue Trend Chart
* Total Products
* Total Orders
* Revenue Tracking
* Low Stock Monitoring

### Product Management

* Product Listing
* Search Products
* Add Product
* Edit Product
* Delete Product
* Stock Management
* Low Stock Alerts

### Order Management

* Order Listing
* Search Orders
* Order Status Tracking

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Recharts

### Backend

* FastAPI
* Python

## Installation

### Frontend

```bash
npm install
npm run dev
```

Runs at:

```text
http://localhost:5173
```

### Backend

```bash
pip install fastapi uvicorn
uvicorn main:app --reload
```

Runs at:

```text
http://127.0.0.1:8000
```

## API Endpoints

### Dashboard

```http
GET /dashboard
```

### Products

```http
GET /products
```

### Orders

```http
GET /orders
```

## Project Structure

```text
src/
├── components/
├── pages/
│   ├── Dashboard.tsx
│   ├── Products.tsx
│   └── Orders.tsx
├── App.tsx
└── main.tsx
```

## Future Improvements

* Product Image Uploads
* Category Management
* Authentication
* Pagination
* Database Integration
* Advanced Analytics

## Author

Aliya Rasheed
