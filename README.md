# SMART MANAGER - Task Management Application

A full-stack task management application built with React, Node.js, and MongoDB. Stay organized, manage tasks efficiently, and track your progress with our intuitive to-do list app.

## 🎯 Features

- ✅ User authentication with JWT tokens
- 📝 Create, read, update, and delete tasks
- 🔐 Secure password authentication
- 👤 User profile management
- 🎨 Responsive and intuitive UI
- ⚡ Real-time task updates
- 💾 MongoDB persistent storage

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI library
- **React Router v6** - Client-side routing
- **React Icons** - Icon library
- **JWT Decode** - Token decoding
- **CSS3** - Styling with Bootstrap classes

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **ESLint** - Code quality

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Docker** (optional, for containerized setup)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd SMART-MANAGER
```

### 2. Environment Setup

Create a `.env` file in the project root with the following variables:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
JWT_SECRET=your-secret-key-here
PORT=1000
```

### 3. Backend Setup

```bash
cd backend
npm install
npm run start
```

The backend will run on `http://localhost:1000`

### 4. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

## 📂 Project Structure

```
SMART-MANAGER/
├── backend/
│   ├── api/
│   │   ├── auth.js          # Authentication endpoints
│   │   ├── list.js          # Task list endpoints
│   │   └── helpers.js       # Helper functions
│   ├── model/
│   │   ├── mongo-list.js    # Task schema
│   │   └── mongo-user.js    # User schema
│   ├── mongo/
│   │   └── connection.js    # Database connection
│   ├── routes/
│   │   └── routes.js        # API routes
│   ├── config/
│   │   └── config.js        # Environment configuration
│   ├── app.js               # Express app setup
│   └── dockerfile           # Docker configuration
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/        # Home page
│   │   │   ├── SignIn/      # Login page
│   │   │   ├── signup/      # Registration page
│   │   │   ├── navbar/      # Navigation bar
│   │   │   ├── footer/      # Footer
│   │   │   └── About/       # About page
│   │   ├── App.js           # Main app component
│   │   ├── config.js        # Frontend configuration
│   │   └── index.js         # Entry point
│   ├── public/              # Static assets
│   ├── dockerfile           # Docker configuration
│   └── package.json         # Dependencies
│
├── docker-compose.yml       # Docker Compose configuration
├── .env                     # Environment variables
└── README.md               # This file
```

## 🔧 API Endpoints

### Authentication

- **POST** `/api/v1/signup` - Register a new user
- **POST** `/api/v1/login` - User login

### User

- **GET** `/api/v1/getUser` - Get current user info (requires auth)

### Tasks

- **POST** `/api/v1/createList` - Create a new task list
- **GET** `/api/v1/getList` - Get all task lists
- **PUT** `/api/v1/updateList/:id` - Update a task list
- **DELETE** `/api/v1/deleteList/:id` - Delete a task list

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for authentication:

1. Users sign up or log in with email/username and password
2. Server returns a JWT token stored in `localStorage`
3. Token is sent in the `Authorization: Bearer <token>` header for protected routes
4. Token contains user information and expiration time

### Protected Routes

- `/` - Home page
- `/About` - About page

Public routes:
- `/SignIn` - Login page
- `/SignUp` - Registration page

## 🐳 Docker Setup

To run the entire application with Docker Compose:

```bash
docker-compose up --build
```

This will start:
- Backend on `http://localhost:1000`
- Frontend on `http://localhost:3000`
- MongoDB database

## 🧪 Development

### Running Both Services

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm start
```

### Code Quality

```bash
cd backend
npm run lint
```

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT signing | `your-secret-key` |
| `PORT` | Backend server port | `1000` |

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Commit with clear messages
4. Push to your branch
5. Create a Pull Request

## 🐛 Troubleshooting

### Frontend environment variables undefined
- Ensure `.env` file exists in the `frontend/` folder
- Variables must start with `REACT_APP_`
- Restart the dev server after creating/modifying `.env`

### MongoDB Connection Failed
- Verify `MONGO_URI` is correct
- Check MongoDB cluster is active and accessible
- Ensure IP whitelist includes your current IP

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: Use `PORT=3001 npm start`

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Vivek Kartik

---

**Happy task managing! 🎉**
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)