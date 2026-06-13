# 🏥 HealthBridge – Full-Stack Digital Healthcare Platform

HealthBridge is a comprehensive MERN-stack web application designed to bridge the gap between patients, doctors, medical suppliers, and emergency blood donors. It provides a user-friendly system for doctor appointments, medicine purchasing, live consultation, and emergency blood donor tracking.

---

## 🌟 Key Features

### 👤 User Authentication & Management
* **Secure Registration & Login:** Protected by JWT cookies.
* **Email Verification:** Account verification links sent automatically upon registration.
* **Password Recovery:** Secure password reset links sent via email.
* **Profile Management:** Users and doctors can manage their profiles and view history.

### 💊 E-Pharmacy & Order Management
* **Medicine Catalog:** Search, filter, and view details of available medicines.
* **Review System:** Rate and write feedback for medicines.
* **Shopping Cart & Checkout:** Add items, apply promo codes, and specify delivery details.
* **Dual Payment Gateways:** Pay securely using **PayPal (Global)** or **AamarPay (Bangladesh)**.

### 👨‍⚕️ Doctor Directory & Appointments
* **Doctor Listings:** Browse doctors by specialization, experience, and fees.
* **Online Booking:** Select dates and schedule consultation appointments.

### 🩸 Emergency Blood Hub
* **Smart Search:** Find blood donors filtered by group and area.
* **Blood Requests:** Post emergency requests that administrative staff can approve.

### 💬 Live Consultation
* **Real-time Chat:** Chat directly with administrative staff and healthcare experts via integrated real-time chat.

### 🛡️ Administrative Panel
* **Dashboard:** Manage medicines, approve blood requests, schedule appointments, track orders, and edit users.

---

## 🛠️ Tech Stack

### Frontend
* **Core:** React.js (v18), Redux Toolkit (State Management)
* **Routing:** React Router DOM
* **Styling:** React Bootstrap, Material-UI, MDB React UI Kit, Styled Components
* **Integrations:** `@paypal/react-paypal-js`, `react-chat-engine-pretty`, `sweetalert2`

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Auth:** JSON Web Tokens (JWT) & bcryptjs
* **File Uploads:** Multer (Local Storage)
* **Emails:** Nodemailer (SMTP integration)

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16+ recommended)
* [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

### 1. Clone & Navigate
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Environment Configuration
Create a `.env` file in the root directory and configure the following variables:

```ini
NODE_ENV = development
PORT = 5000
MONGO_URI = your_mongodb_connection_uri
JWT_SECRET = your_jwt_access_secret
JWT_RESET_SECRET = your_jwt_password_reset_secret

# SMTP Mail configuration
SMTP_HOST = mail.yourmailserver.com
SMTP_PORT = 587
SMTP_USER = info@yourdomain.com
SMTP_PASS = your_smtp_password
SMTP_FROM = info@yourdomain.com

# PayPal Configuration
PAYPAL_CLIENT_ID = your_paypal_client_id

# Chat Engine Configuration
CHAT_ENGINE_PROJECT_ID = your_chat_engine_project_id
CHAT_ENGINE_PRIVATE_KEY = your_chat_engine_private_key

# AamarPay Configuration
AAMARPAY_STORE_ID = your_aamarpay_store_id
AAMARPAY_SIGNATURE_KEY = your_aamarpay_signature_key
AAMARPAY_API_URL = https://sandbox.aamarpay.com/jsonpost.php

# Domains
FRONTEND_URL = http://localhost:3000
BACKEND_URL = http://localhost:5000
```

### 3. Install Dependencies
This project uses older packages that require dependency resolution flags. Run the following commands:

```bash
# Install root (backend) dependencies
npm install --legacy-peer-deps

# Install frontend dependencies
npm install --prefix frontend --legacy-peer-deps
```

### 4. Seed Database (Optional)
To pre-populate the database with sample medicines, doctors, and blood donor data:
```bash
npm run data:import
```
> [!WARNING]
> This will overwrite existing users, orders, medicines, and doctors in the configured database.

### 5. Run Development Servers
Start both the backend server and the React frontend concurrently:
```bash
npm run dev
```
* **Frontend:** `http://localhost:3000`
* **Backend:** `http://localhost:5000`

---

## 📂 Project Structure

```
├── backend/
│   ├── config/          # Database configuration
│   ├── controller/      # API Route controller logic
│   ├── data/            # Local seed data
│   ├── middleware/      # Auth & error handling middlewares
│   ├── models/          # Mongoose database schemas
│   ├── routes/          # Express route declarations
│   ├── utils/           # Nodemailer & JWT utility helpers
│   └── server.js        # Main backend entry point
├── frontend/
│   ├── public/          # Static public assets
│   └── src/
│       ├── components/  # Shared React components
│       ├── Screens/     # Page components (Admin, Doctor, etc.)
│       ├── slices/      # Redux API/State slices (RTK Query)
│       ├── constants.js # API endpoints
│       └── index.js     # React application entry point
├── uploads/             # Destination for uploaded images
├── package.json         # Main scripts & dependencies
└── .env                 # Environment variables (Gitignored)
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
