# Bazaar Byte - Full-Featured eCommerce Platform

**[Live Demo](https://bazaar-byte.onrender.com/)**  
*Built with the MERN Stack for Seamless Online Shopping*

---

Bazaar Byte is a powerful eCommerce platform crafted with the MERN stack (MongoDB, Express.js, React, Node.js). It’s designed for a smooth shopping experience, featuring user authentication, product browsing, cart management, Stripe payments, coupon discounts, and a robust admin dashboard for inventory and analytics.

---

## ✨ Features

- **Fast Frontend**: Powered by React, Vite, and Tailwind CSS for a modern, responsive storefront.
- **Secure Authentication**: JWT-based signup, login, and protected routes.
- **Product Browsing**: Explore categories and featured items on the homepage.
- **Cart Management**: Add, update, or remove items with real-time updates.
- **Payments**: Secure Stripe integration for easy checkout.
- **Coupon System**: Apply discount codes at checkout.
- **Admin Dashboard**: Manage products (create, delete, feature) and view sales analytics.
- **Responsive Design**: Works flawlessly on desktops, tablets, and mobiles.
- **Animations**: Smooth UI transitions with Framer Motion.
- **Order Summary**: Real-time subtotal, savings, and total calculations.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Payments**: Stripe
- **Authentication**: JWT

---

## 🚀 Getting Started

Follow these steps to set up Bazaar Byte locally.

### Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Local instance or MongoDB Atlas
- **Stripe Account**: For payment integration

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/bazaar-byte.git
   cd bazaar-byte

   ```

2. **Install Dependencies**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
    PORT=5000
    MONGO_URI=your-mongodb-uri
    UPSTASH_REDIS_URL=your-upstash-redis-url
    REFRESH_TOKEN_SECRET=your-refresh-token-secret
    ACCESS_TOKEN_SECRET=your-access-token-secret
    CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    STRIPE_SECRET_KEY=your-stripe-secret-key
    CLIENT_URL=http://localhost:5173
    NODE_ENV=development
   ```

4. **Start the Backend**
   ```bash
   cd backend
   npm run dev
   ```

5. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the App**

   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

   You should see the Bazaar Byte homepage.

---


