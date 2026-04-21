# 🚨 ResQNet — AI-Powered Disaster Management Platform

> **Connecting victims, volunteers, and authorities in real time — because every second counts.**

🔗 **Live Demo:** [https://resqnet-frontend.netlify.app/Landing](https://resqnet-frontend.netlify.app/Landing)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Workflow](#-workflow)
- [Tech Stack](#-tech-stack)
- [Backend Architecture](#-backend-architecture)
- [Database Design](#-database-design)
- [Frontend](#-frontend)
- [Key Features](#-key-features)
- [Scalability & System Design](#-scalability--system-design)
- [AI Integration (Planned)](#-ai-integration-planned)
- [Getting Started](#-getting-started)

---

## 🧠 Overview

**ResQNet** is a full-stack disaster management platform built to solve one of the most critical gaps in emergency response — **delayed coordination and poor communication** between victims, volunteers, and authorities.

In disaster scenarios, time is the most valuable resource. ResQNet leverages **geolocation-based logic**, **role-based access control**, and **real-time task management** to ensure help reaches those who need it — faster.

### The Problem We're Solving

- Victims struggle to report incidents quickly and accurately
- Volunteers have no structured way to receive and act on assignments
- Authorities lack a centralized view to monitor and coordinate relief efforts

ResQNet addresses all three with a unified, intelligent platform.

---

## 🔄 Workflow

```
Victim Reports Incident
        ↓
REST API receives location + incident details
        ↓
Backend validates & stores data in MongoDB
        ↓
Geolocation engine finds nearby verified volunteers
        ↓
Tasks are assigned to volunteers
        ↓
Volunteers accept / complete tasks (status updates)
        ↓
Admin monitors all incidents & manages volunteers
```

---

## 🛠 Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React.js, Framer Motion           |
| Backend     | Node.js, Express.js               |
| Database    | MongoDB (with 2dsphere indexing)  |
| Auth        | JWT (JSON Web Tokens)             |
| Hosting     | Netlify (Frontend)                |

---

## ⚙️ Backend Architecture

Built with **Node.js + Express.js**, following a clean, modular structure:

```
├── routes/          # API route definitions
├── controllers/     # Business logic handlers
├── services/        # Core service layer
├── models/          # Mongoose data models
└── middleware/      # Auth & error handling
```

### Design Principles

- **JWT-based Authentication** — secure, stateless token auth for all roles
- **Role-Based Access Control (RBAC)** — distinct permissions for victims, volunteers, and admins
- **RESTful API Design** — stateless, predictable, and scalable endpoints
- **Middleware Pipeline** — centralized authentication and error handling

---

## 🗄 Database Design

**MongoDB** with three primary collections:

| Collection  | Purpose                                        |
|-------------|------------------------------------------------|
| `Users`     | Stores victims, volunteers, and admin profiles |
| `Incidents` | Tracks reported disasters with location data   |
| `Tasks`     | Manages volunteer task assignments and status  |

- **2dsphere Geolocation Indexing** for high-performance proximity queries
- Optimized query patterns to minimize latency under high load

---

## 🎨 Frontend

Built with **React.js** for a fast, responsive user experience.

### Dashboards

| Dashboard   | Description                                      |
|-------------|--------------------------------------------------|
| 📋 Profile  | User info, role, and verification status         |
| ✅ Tasks    | Active and completed volunteer assignments       |
| 🆘 Requests | Victim incident submissions and status tracking  |
| 🏆 Rewards  | Volunteer recognition and contribution tracking  |

- **Framer Motion** for smooth, purposeful animations
- Fully responsive design across all device sizes

---

## ✨ Key Features

- 🔐 **Role-Based Authentication** — Victim, Volunteer, Admin roles with scoped access
- 📍 **Geolocation-Based Reporting** — Incidents pinpointed with precise coordinates
- ✅ **Volunteer Verification System** — Only trusted volunteers receive assignments
- 📊 **Task Assignment & Tracking** — Full lifecycle from assignment to completion
- 🖥 **Admin Dashboard** — Centralized monitoring and management of all operations

---

## 📈 Scalability & System Design

ResQNet is architected with scale in mind from day one:

- **Stateless REST APIs** → supports horizontal scaling with ease
- **Optimized DB Queries & Indexing** → fast responses even at high volume
- **Load Balancing Ready** → designed to distribute traffic across multiple nodes
- **Microservices-Compatible Architecture** → services can be independently scaled or extracted

---

## 🤖 AI Integration (Planned)

| Feature                       | Description                                                    |
|-------------------------------|----------------------------------------------------------------|
| 📈 Demand Prediction           | Time-series forecasting to anticipate resource needs           |
| 🤝 Volunteer Optimization      | Smart matching of volunteers to incidents based on proximity and skills |
| 📦 Resource Allocation         | Algorithm-driven distribution of relief materials              |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/resqnet.git
cd resqnet

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `/backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the App

```bash
# Start backend server
cd backend
npm run dev

# Start frontend (in a separate terminal)
cd frontend
npm start
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

---

## 🌐 Live Demo

👉 [https://resqnet-frontend.netlify.app/Landing](https://resqnet-frontend.netlify.app/Landing)

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">
  Built with ❤️ to make disaster response faster, smarter, and more human.
</div>
