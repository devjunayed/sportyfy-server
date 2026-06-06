# 🏟️ Sportyfy Server — REST API for Sports Facility Booking Platform

Sportyfy Server is the backend REST API for the Sportyfy sports facility booking platform. Built with **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**, it handles authentication, facility management, slot scheduling, bookings, payments, reviews, and admin analytics.

---

## 🔴 Live API

```
https://api-sportyfy.devjunayed.com/
```

---

## ✨ Features

- JWT-based authentication with access & refresh tokens
- Role-based authorization (user / admin)
- Full CRUD for facilities and categories with soft delete
- Time slot management with bulk slot generation across date ranges
- Booking system with real-time slot availability checking
- Auto-calculated payable amount based on facility price and time range
- Payment integration via **SSLCommerz** (BDT currency) with transaction ID tracking
- Reviews and ratings system with nested reply support
- Admin dashboard analytics via MongoDB Aggregation Pipeline
- Global error handling (Zod, Mongoose validation, cast, duplicate errors)
- Request body validation with Zod schemas
- Password hashing with bcrypt, password excluded from all responses

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Language | TypeScript |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Validation | Zod |
| Authentication | JSON Web Token (JWT) |
| Password Hashing | bcrypt |
| Payment Gateway | SSLCommerz (BDT) |
| Date Utility | Day.js |
| Linting | ESLint + Prettier |
| Deployment | Vercel |

---

## 📁 Project Structure

```
sportyfy-server/
├── src/
│   ├── server.ts                          # Entry point — connects to DB, starts Express server
│   ├── app.ts                             # Express app setup — middleware, routes, error handlers
│   │
│   └── app/
│       ├── config/
│       │   └── index.ts                   # Loads all environment variables via dotenv
│       │
│       ├── interface/
│       │   └── error.ts                   # Shared TypeScript interface for error response shape
│       │
│       ├── errors/                        # Centralized error normalizers
│       │   ├── AppError.ts                # Custom error class extending Error (with statusCode)
│       │   ├── handleZodError.ts          # Parses Zod validation errors into standard format
│       │   ├── handleValidationError.ts   # Parses Mongoose ValidationError
│       │   ├── handleCastError.ts         # Handles invalid MongoDB ObjectId casts
│       │   └── handleDuplicateError.ts    # Handles MongoDB duplicate key (code 11000) errors
│       │
│       ├── middlewares/
│       │   ├── auth.ts                    # JWT verification + role-based guard (admin/user)
│       │   ├── validateRequest.ts         # Wraps Zod schema parsing for req.body
│       │   ├── globalErrorHandler.ts      # Catches all errors, maps to correct handler & response
│       │   └── notFound.ts                # 404 handler for unmatched routes
│       │
│       ├── utils/
│       │   ├── catchAsync.ts              # Wraps async route handlers to forward errors to next()
│       │   └── sendResponse.ts            # Unified JSON response helper with empty-data handling
│       │
│       ├── routes/
│       │   └── index.ts                   # Central router — registers all module routes under /api
│       │
│       └── modules/                       # Feature modules (each follows controller-service pattern)
│           │
│           ├── auth/
│           │   ├── auth.controller.ts     # Handles POST /auth/login
│           │   ├── auth.service.ts        # Verifies credentials, issues access + refresh tokens
│           │   ├── auth.utils.ts          # createToken() helper using jsonwebtoken
│           │   ├── auth.validation.ts     # Zod schema for login request body
│           │   ├── auth.interface.ts      # TLoginUser type
│           │   └── auth.route.ts          # POST /signup, POST /login
│           │
│           ├── user/
│           │   ├── user.controller.ts     # Handles POST /auth/signup, GET /user/:email
│           │   ├── user.service.ts        # createUser, getUserByEmail business logic
│           │   ├── user.model.ts          # Mongoose schema: name, email, password (bcrypt),
│           │   │                          # phone, address, role (admin/user)
│           │   │                          # Statics: isUserExistsByEmail, isPasswordMatched
│           │   ├── user.validation.ts     # Zod schema for user registration
│           │   ├── user.interface.ts      # TUser, UserModel types
│           │   └── user.route.ts          # GET /user/:email
│           │
│           ├── facility/
│           │   ├── facility.controller.ts # CRUD handlers for facilities
│           │   ├── facility.service.ts    # DB operations: create, update, softDelete, getAll, getOne
│           │   ├── facility.model.ts      # Mongoose schema: name, images[], shortDescription,
│           │   │                          # description, pricePerHour, capacity, category,
│           │   │                          # highlight, openHours, rating, location, isDeleted
│           │   ├── facility.validation.ts # Zod schemas for create & update
│           │   ├── facility.interface.ts  # TFacility type
│           │   └── facility.route.ts      # GET /, GET /:id, POST /, PUT /:id, DELETE /:id
│           │
│           ├── category/
│           │   ├── category.controller.ts # CRUD handlers for categories
│           │   ├── category.service.ts    # DB operations for category management
│           │   ├── category.model.ts      # Mongoose schema for sport categories
│           │   ├── category.validation.ts # Zod schemas for create & update
│           │   ├── category.interface.ts  # TCategory type
│           │   └── category.route.ts      # GET /, GET /:id, POST /, PUT /:id, DELETE /:id
│           │
│           ├── slots/
│           │   ├── slots.controller.ts    # Handles POST /slot/bulk
│           │   ├── slots.service.ts       # Bulk slot generator — loops over date range,
│           │   │                          # splits each day into intervals using Day.js,
│           │   │                          # inserts all slots in one insertMany()
│           │   ├── slots.model.ts         # Mongoose schema: facility (ref), bookedBy (ref),
│           │   │                          # date, startTime, endTime, isBlocked, isBooked
│           │   ├── slots.validation.ts    # Zod schema for bulk slot input
│           │   ├── slots.interface.ts     # TSlot, TIncomingSlotData types
│           │   └── slots.route.ts         # POST /slot/bulk (Admin only)
│           │
│           ├── booking/
│           │   ├── booking.controller.ts  # Handles all booking endpoints
│           │   ├── booking.service.ts     # checkAvailability, createBooking (validates slot,
│           │   │                          # calculates price, initiates SSLCommerz payment),
│           │   │                          # getAllBookings, getUserBookings, cancelBooking
│           │   ├── booking.model.ts       # Mongoose schema: date, startTime, endTime,
│           │   │                          # user (ref), facility (ref), payableAmount,
│           │   │                          # transactionId, isBooked (confirmed/canceled),
│           │   │                          # paymentStatus (Pending/Paid/Canceled)
│           │   ├── booking.utils.ts       # getSlot() — queries available slots for a date
│           │   ├── booking.validation.ts  # Zod schema for booking request body
│           │   ├── booking.interface.ts   # TBooking type
│           │   └── booking.route.ts       # GET /check-availability, POST /bookings,
│           │                              # GET /bookings, GET /bookings/user,
│           │                              # DELETE /bookings/:id
│           │
│           ├── payment/
│           │   ├── payment.controller.ts  # Handles POST /payment (SSLCommerz callback)
│           │   ├── payment.services.ts    # Updates booking paymentStatus after confirmation
│           │   ├── payment.utils.ts       # initiatePayment() — builds SSLCommerz payload,
│           │   │                          # sets success/fail/cancel redirect URLs,
│           │   │                          # returns GatewayPageURL
│           │   └── payment.route.ts       # POST /payment (public callback endpoint)
│           │
│           ├── reviews/
│           │   ├── reviews.controller.ts  # Handles POST /review
│           │   ├── reviews.service.ts     # createReview business logic
│           │   ├── reviews.model.ts       # Mongoose schema: facilityId (ref), userId (ref),
│           │   │                          # rating, review, replys[] (nested review schema)
│           │   ├── reviews.validation.ts  # Zod schema for review submission
│           │   ├── reviews.interface.ts   # TReviews type
│           │   └── reviews.route.ts       # POST /review (user + admin)
│           │
│           └── dashboard/
│               ├── dashboard.controller.ts # Handles GET /dashboard/stats
│               ├── dashboard.service.ts    # MongoDB Aggregation Pipeline:
│               │                           # totalUsers, totalFacilities, activeBookings,
│               │                           # newRequests (pending payments),
│               │                           # monthlyRevenue (current year),
│               │                           # revenueByMonth (last 6 months),
│               │                           # weeklyBookings (last 7 days),
│               │                           # topFacilities (top 3 by booking count)
│               └── dashboard.route.ts      # GET /dashboard/stats (Admin only)
│
├── types.d.ts                             # Extends Express Request type to include user (JwtPayload)
├── tsconfig.json                          # TypeScript compiler config
├── eslint.config.mjs                      # ESLint rules with Prettier integration
├── vercel.json                            # Vercel deployment config
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- SSLCommerz account (for payment)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sportyfy-server.git

cd sportyfy-server

npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=your_mongodb_connection_string

# JWT
JWT_ACCESS_SECRET=your_access_secret
JWT_ACCESS_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=30d

# Bcrypt
SALT_ROUNDS=12

# SSLCommerz Payment
STORE_ID=your_sslcommerz_store_id
STORE_PASS=your_sslcommerz_store_password
SIGNATURE_KEY=your_signature_key
PAYMENT_URL=https://sandbox.sslcommerz.com/gwprocess/v4/api.php

# App URLs
SERVER_API=http://localhost:5000/api
FRONTEND_URL=http://localhost:3000
```

### Run Development Server

```bash
npm run dev
```

### Build & Run Production

```bash
npm run build
npm start
```

---

## 🔐 Authentication

All protected routes require a Bearer token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

| Role | Permissions |
|---|---|
| Guest | Browse facilities, check slot availability |
| User | Book facilities, manage own bookings, post reviews |
| Admin | Full access — manage facilities, categories, slots, all bookings, dashboard |

---

## 📡 API Endpoints

Base URL: `/api`

### Auth

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/auth/signup` | Public | Register a new user |
| POST | `/auth/login` | Public | Login and receive JWT tokens |

### Users

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/user/:email` | Auth | Get user by email |

### Facilities

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/facility` | Public | Get all facilities |
| GET | `/facility/:id` | Public | Get single facility |
| POST | `/facility` | Admin | Create a facility |
| PUT | `/facility/:id` | Admin | Update a facility |
| DELETE | `/facility/:id` | Admin | Soft delete a facility |

### Categories

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/category` | Public | Get all categories |
| GET | `/category/:id` | Public | Get single category |
| POST | `/category` | Admin | Create a category |
| PUT | `/category/:id` | Admin | Update a category |
| DELETE | `/category/:id` | Admin | Delete a category |

### Slots

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/slot/bulk` | Admin | Bulk generate time slots for facilities across a date range |

### Bookings

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/check-availability` | Public | Check available slots for today |
| GET | `/check-availability?date=YYYY-MM-DD` | Public | Check slots for a specific date |
| POST | `/bookings` | User | Create a booking + initiate SSLCommerz payment |
| GET | `/bookings` | Admin | Get all bookings |
| GET | `/bookings/user` | User | Get current user's bookings |
| DELETE | `/bookings/:id` | User | Cancel a booking |

### Payment

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/payment` | Public | SSLCommerz confirmation callback — updates payment status |

### Reviews

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/review` | User / Admin | Submit a review with rating for a facility |

### Dashboard

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/dashboard/stats` | Admin | Full analytics: users, bookings, revenue, weekly trends, top facilities |

---

## 🗄️ Data Models

### User
```
name, email (unique), password (bcrypt hashed, hidden in responses),
phone, address, role (admin | user)
```

### Facility
```
name, images[], shortDescription, description, pricePerHour,
capacity, category, highlight, openHours, rating, location, isDeleted
```

### Slot
```
facility (ref), bookedBy (ref), date (YYYY-MM-DD),
startTime (HH:mm), endTime (HH:mm), isBlocked, isBooked
```

### Booking
```
date, startTime, endTime, user (ref), facility (ref),
payableAmount, transactionId, isBooked (confirmed | canceled),
paymentStatus (Pending | Paid | Canceled)
```

### Review
```
facilityId (ref), userId (ref), rating, review,
replys[] (nested — same schema for threaded replies)
```

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
