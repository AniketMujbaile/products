# products
This is a simple e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse products, sort them by name or price, and filter them by category. The frontend is developed with React and Tailwind CSS, while the backend uses Node.js, Express, and MongoDB for product data management.

## 🔗 Hosted link: [E-Commerce](https://products-eezk.vercel.app/)

## 🧑‍💻Screenshot
<img src="https://github.com/AniketMujbaile/products/blob/main/OutputScreenshot.png" width="500px">
<hr/>

## ✨Features
- Product List: Displays a list of products fetched from the backend API.
- Sorting: Products can be sorted by name or price.
- Category Filtering: Products can be filtered by category.
- Responsive Design: The application is fully responsive and styled with Tailwind CSS.

## Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- API: REST API for product management
- Version Control: Git

## 🛠️Getting Started

### Installation

## Frontend
1. Clone the repository:
git clone https://github.com/AniketMujbaile/products.git

```bash
cd rontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the Client:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend

1. Clone the Repository

```bash
cd backend
```

2. Install Dependencies

```bash
npm install
```

3. Set Up Environment Variables

Create a .env file in the root directory and add the following variables:
 
 ```bash
PORT=5000
MONGODB_URI=<your-mongodb-uri>
NODE_ENV=development
```

4. Run the Server

```bash
npm start
```

## API Endpoints

- `GET /api/products` - Fetch all products (optionally filtered by category).
- `GET /api/products/:id` - Fetch a single product by ID.
- `POST /api/products` - Create a new product (requires appropriate backend setup).
 
