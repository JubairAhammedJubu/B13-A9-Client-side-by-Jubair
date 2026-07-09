# SportNest - Sports Facility Booking Management System

A modern full-stack **Sports Facility Booking Management System** built with the **MERN Stack**. SportNest allows users to discover sports facilities, book available time slots, manage their own facilities, and track bookings through a secure and responsive web application.

---

# 🌐 Live Website

> **Live URL:** https://b13-a9-client-side-by-jubair.vercel.app

---

# 📂 GitHub Repositories

### Client Repository

> https://github.com/JubairAhammedJubu/B13-A9-Client-side-by-Jubair

### Server Repository

> https://github.com/JubairAhammedJubu/B13-A9-Server-side-by-Jubair
---

# 🎯 Project Purpose

SportNest is designed to simplify sports facility reservations by providing a centralized platform where users can:

* Browse available sports facilities
* Book facilities for specific dates and time slots
* Manage personal bookings
* Add and manage owned facilities
* Cancel bookings
* Securely authenticate users using Better Auth

The project demonstrates a complete MERN Stack application with authentication, CRUD operations, protected routes, JWT security, responsive UI, and database integration.

---

# 📸 Project Screenshot

> Replace this image with your own project screenshot.

![SportNest Screenshot](./public/screenshot.png)

---

# ✨ Key Features

##  🔐 Authentication

* User Registration
* User Login
* Google Sign-In
* Better Auth Authentication
* Protected Routes
* JWT Authentication with HTTPOnly Cookies

---

##  🏟 Facility Management

* Add New Facility
* Update Facility
* Delete Facility
* View Facility Details
* Upload Facility Images
* Owner-Based Facility Management

---

##  📅 Booking System

* Book Sports Facilities
* Select Date
* Choose Available Time Slot
* Calculate Total Price Automatically
* Booking Status Management
* Cancel Booking

---

##  👨‍💻 User Dashboard

* My Bookings
* Add Facility
* Manage My Facilities
* Profile Dropdown
* Logout

---

##  🔍 Search & Filter

* Search by Facility Name
* Filter by Sport Type
* MongoDB `$regex`
* MongoDB `$in`

---

##  📱 Responsive Design

* Desktop
* Tablet
* Mobile

---

## ⭐ Additional Features

* Loading Spinner
* Custom 404 Page
* Toast Notifications
* Image Upload
* Booking Counter
* Theme Toggle 

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React.js
* React Router DOM
* Tailwind CSS
* DaisyUI
* React Icons
* React Hot Toast

---

## Backend

* Node.js
* Express.js

---

## Database

* MongoDB

---

## Authentication

* Better Auth
* JWT
* HTTPOnly Cookies

---

## Image Hosting

* ImgBB API / PostImage

---

## Deployment

### Client & Server

* Vercel

---

# 📦 NPM Dependencies

## Client

```json
react
react-router-dom
axios
tailwindcss
daisyui
react-hook-form
react-icons
react-hot-toast
framer-motion
firebase
```

## Server

```json
express
mongodb
cors
dotenv
jsonwebtoken
cookie-parser
better-auth
```

---

# 💻 Run the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sportnest-client.git
git clone https://github.com/yourusername/sportnest-server.git
```

---

## 2. Install Dependencies

### Client

```bash
cd sportnest-client
npm install
```

### Server

```bash
cd sportnest-server
npm install
```

---

## 3. Configure Environment Variables

### Client (.env)

```env
VITE_API_URL=http://localhost:5000
VITE_IMGBB_API_KEY=YOUR_IMGBB_KEY
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_KEY
```

### Server (.env)

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

CLIENT_URL=http://localhost:5173
```

---

## 4. Run Development Server

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
```

---

## 5. Open in Browser

```
http://localhost:5173
```

---

# 📊 Database Collections

## Facilities

```js
{
  name,
  facility_type,
  location,
  price_per_hour,
  capacity,
  available_slots,
  description,
  owner_email,
  booking_count
}
```

## Bookings

```js
{
  facility_id,
  user_email,
  booking_date,
  time_slot,
  hours,
  total_price,
  status
}
```

---

# 🔒 Security Features

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Private API Middleware
- Environment Variables
- MongoDB Credential Protection

---

# 🚀 Future Improvements

* Online Payment Integration
* Booking Approval System
* Email Notifications
* Calendar View
* Admin Dashboard
* Facility Reviews & Ratings
* Real-Time Slot Availability
* Booking Analytics
---
## ⭐ If you like this project, consider giving it a star on GitHub!
