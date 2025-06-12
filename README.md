# 🛍️ E-Commerce API Documentation

**Base URL:** `http://localhost:8000/api`

---

## 📦 Product Routes (`/product`)

### ➕ Create a Product  
`POST /product/create`  
Creates a new product.  

📥 **Body:**  
```json
{
  "name": "T-Shirt",
  "slug": "t-shirt",
  "price": 1000,
  "brandId": "ObjectId",
  "categoryIds": ["ObjectId"],
  "inStock": true,
  "images": ["https://example.com/image.jpg"]
}
```

---

### 🔍 Get a Product by Slug  
`GET /product/get/:slug`  
Retrieves a product using its slug.  

📘 **Params:**  
- `slug` — string (e.g., `t-shirt`)

---

### ✏️ Update a Product by Slug  
`PUT /product/update/:slug`  
Updates a product using its slug.  

📘 **Params:**  
- `slug` — string  
📥 **Body:** Same structure as in `POST /product/create`.

---

## 🏷️ Brand Routes (`/brand`)

### ➕ Create a Brand  
`POST /brand/create`  
Creates a new brand.

📥 **Body:**
```json
{
  "name": "Nike",
  "description": "Top sportswear brand",
  "logoUrl": "https://example.com/logo.png",
  "websiteUrl": "https://nike.com"
}
```

---

### 📄 Get All Brands  
`GET /brand/get`  
Retrieves all brands.

---

## 📂 Category Routes (`/category`)

### ➕ Create a Category  
`POST /category/create`  
Creates a new category.

📥 **Body:**
```json
{
  "name": "Clothing",
  "slug": "clothing",
  "description": "Apparel and garments"
}
```

---

### 📄 Get All Categories  
`GET /category/get`  
Retrieves all categories.

---

## 📬 Order Routes (`/order`)

### 🛒 Create an Order  
`POST /order/create`  
Creates a new customer order.

📥 **Body:**
```json
{
  "customerName": "Ahmed Hossain",
  "customerPhone": "+8801700000001",
  "customerAddress": "House 5, Road 12, Gulshan 2, Dhaka",
  "products": [
    {
      "productId": "ObjectId",
      "quantity": 2,
      "price": 950
    }
  ],
  "totalAmount": 1900,
  "paymentMethod": "COD"
}
```

---

### 📦 Get Order by ID  
`GET /order/get/:id`  
Retrieves an order by its MongoDB `_id`.

📘 **Params:**  
- `id` — string (MongoDB ObjectId)

---

## ⚙️ General Settings Routes (`/general`)

### 🔄 Update General Settings  
`PUT /general/update`  
Updates general site configuration (e.g., site name, footer info).

📥 **Body:** *Structure depends on your general settings schema*

---

### 📄 Get General Settings  
`GET /general/get`  
Fetches current general settings.

---

## ✅ Notes

- All endpoints return standard JSON responses.
- For future enhancements: add authentication, validation, and error schemas.
- Consider adding status codes and example responses if you want Swagger/OpenAPI support next.