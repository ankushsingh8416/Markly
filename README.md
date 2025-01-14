# Markly - Bag Shop

Markly is a modern e-commerce web application for a bag shop. Built with React, Tailwind CSS, Node.js, Express, and JWT authentication, this platform offers a seamless user experience and a robust backend admin panel for managing products.

---

## Features

### User Features
- **Authentication:** Secure login and registration with JWT.
- **Product Browsing:** Explore a variety of bags with detailed descriptions and images.
- **Shopping Cart:** Add items to the cart and proceed to checkout.
- **Responsive Design:** Optimized for all screen sizes using Tailwind CSS.

### Admin Features
- **Admin Panel:** 
  - Add new products.
  - Update product details.
  - Delete products.
  - View product list.

---

## Technology Stack

### Frontend:
- **React**: For building a dynamic and interactive user interface.
- **Tailwind CSS**: For responsive and modern styling.

### Backend:
- **Node.js**: Server-side runtime.
- **Express**: Backend framework for building APIs.

### Authentication:
- **JWT (JSON Web Tokens)**: Secure authentication system.

---

## Installation

### Prerequisites:
- Node.js and npm installed.
- MongoDB instance running locally or in the cloud.

### Steps:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/markly-bag-shop.git
   cd markly-bag-shop
   ```

2. **Install Dependencies:**
   - **Frontend:**
     ```bash
     cd client
     npm install
     ```
   - **Backend:**
     ```bash
     cd server
     npm install
     ```

3. **Environment Variables:**
   Create a `.env` file in the `server` directory with the following keys:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```

4. **Run the Application:**
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd client
     npm start
     ```

---

## Project Structure

```
markly-bag-shop/
├── client/         # React frontend
├── server/         # Node.js and Express backend
├── README.md       # Project documentation
└── .env            # Environment variables (not included in repo)
```

---

## API Endpoints

### Authentication:
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Authenticate a user.

### Products:
- **GET** `/api/products`: Fetch all products.
- **POST** `/api/products`: Add a new product (Admin only).
- **PUT** `/api/products/:id`: Update a product (Admin only).
- **DELETE** `/api/products/:id`: Delete a product (Admin only).

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any queries or support, please contact:
- **Name:** Ankush Rajput
- **Email:** ankushsingh8416@example.com
- **GitHub:** https://github.com/ankushsingh8416/Markly/

---

