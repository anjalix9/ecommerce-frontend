# 🛒 E-Commerce Frontend Application

## 📌 Project Overview

This is a fully functional **E-commerce Frontend Application** built using React. The project demonstrates modern frontend development concepts including component-based architecture, state management, API integration, and responsive UI design.

Users can browse products, view details, add items to the cart, manage quantities, and simulate a checkout process.

---

## 🚀 Features

* 🏬 Product Listing (API Integration)
* 🔍 Product Details Page
* 🛒 Shopping Cart with Quantity Management
* 💾 Persistent Cart (Local Storage)
* 🔐 User Authentication (Login/Signup Simulation)
* 💳 Checkout Process with Form Validation
* 🎨 Modern UI with Dynamic Backgrounds
* ⚡ Responsive Design
* 🔄 State Management using Context API

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router
* **State Management:** Context API
* **API:** FakeStoreAPI
* **Styling:** CSS (Glassmorphism + Animations)
* **Storage:** LocalStorage
* **Deployment:** Vercel / Netlify

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Navbar/
│   ├── ProductCard/
│   ├── Cart/
│
│── pages/
│   ├── Home.js
│   ├── ProductDetails.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── Login.js
│   ├── Signup.js
│
│── contexts/
│   ├── CartContext.js
│   ├── AuthContext.js
│
│── services/
│   ├── api.js
│
│── styles/
│
│── App.js
│── index.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/ecommerce-frontend.git
```

2. Navigate to project folder:

```bash
cd ecommerce-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm start
```

---

## 🌐 API Integration

* Used **FakeStoreAPI** to fetch product data
* Implemented:

  * Product listing
  * Product details
  * Dynamic rendering

---

## 🧠 State Management

Used **React Context API**:

### CartContext

* Add to cart
* Remove items
* Increase/Decrease quantity
* Persistent storage

### AuthContext

* Register/Login user
* Store user in LocalStorage
* Logout functionality

---

## 💳 Checkout Flow

* Form validation (Name, Address)
* Order confirmation alert
* Simulated purchase process

---

## ⚡ Performance Optimization

* Lazy loading images
* Optimized component rendering
* Clean component structure
* Efficient state updates

---

## 🧪 Testing

* Manual testing of:

  * Cart functionality
  * Login/Signup
  * Checkout flow
* Edge cases handled:

  * Empty cart
  * Invalid inputs

---

## 🚀 Deployment

You can deploy this project using:

* Vercel
* Netlify

---

## 📌 Future Improvements

* 🔎 Search functionality
* ❤️ Wishlist feature
* 🌙 Dark mode
* 💰 Payment gateway integration
* 📦 Order history

---

## 🙌 Conclusion

This project demonstrates a complete frontend application with real-world features and modern UI practices. It showcases strong understanding of React concepts and frontend development workflows.

---

## 👩‍💻 Author

**Anjali Goswami**

---

## ⭐ If you like this project, give it a star!
