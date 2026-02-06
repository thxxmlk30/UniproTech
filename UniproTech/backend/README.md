# Club Informatique - Backend

This is the backend API for the Club Informatique website. It's built with Node.js, Express.js, and MongoDB.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Token for authentication
- **Multer** - File upload handling
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing

## Project Structure

```
backend/
├── src/
│   ├── controllers/         # Route handlers
│   │   ├── authController.js        # Authentication
│   │   ├── projectController.js     # Project management
│   │   ├── activityController.js    # Activity management
│   │   ├── serviceController.js     # Service management
│   │   └── contactController.js     # Contact form handling
│   ├── models/              # MongoDB schemas
│   │   ├── User.js          # User schema (admin)
│   │   ├── Project.js       # Project schema
│   │   ├── Activity.js      # Activity schema
│   │   └── Service.js       # Service schema
│   ├── routes/              # API routes
│   │   ├── authRoutes.js    # Authentication routes
│   │   ├── projectRoutes.js # Project routes
│   │   ├── activityRoutes.js # Activity routes
│   │   ├── serviceRoutes.js # Service routes
│   │   └── contactRoutes.js # Contact routes
│   ├── middlewares/         # Express middlewares
│   │   ├── authMiddleware.js # JWT authentication middleware
│   │   ├── errorMiddleware.js # Error handling
│   │   └── fileUploadMiddleware.js # File upload handling
│   ├── config/              # Configuration files
│   │   ├── database.js      # MongoDB connection
│   │   └── corsOptions.js   # CORS configuration
│   ├── utils/               # Utility functions
│   │   ├── generateToken.js # JWT token generation
│   │   └── validation.js    # Input validation
│   ├── services/            # Business logic
│   │   ├── authService.js   # Authentication service
│   │   ├── projectService.js # Project service
│   │   ├── activityService.js # Activity service
│   │   └── serviceService.js # Service service
│   └── server.js            # Server entry point
├── uploads/                 # Uploaded files storage
├── package.json             # Dependencies and scripts
└── .env.example             # Environment variables example
```

## Installation

1. Navigate to the backend directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000/api`.

## Build

Create a production build:

```bash
npm run build
```

## Features

### Authentication

- **Admin Registration** - Create admin accounts (only available to existing admins)
- **Login** - Secure login with JWT token
- **Protected Routes** - All admin routes require JWT authentication

### Project Management

- **Get All Projects** - Retrieve all projects for portfolio display
- **Get Project by ID** - Retrieve specific project details
- **Create Project** - Add new project with images and details
- **Update Project** - Modify existing project information
- **Delete Project** - Remove project from database
- **Upload Project Images** - Handle project image uploads

### Activity Management

- **Get All Activities** - Retrieve all club activities
- **Get Activity by ID** - Retrieve specific activity details
- **Create Activity** - Add new club activities (events, workshops, training)
- **Update Activity** - Modify existing activity information
- **Delete Activity** - Remove activity from database

### Service Management

- **Get All Services** - Retrieve all services for services page
- **Get Service by ID** - Retrieve specific service details
- **Create Service** - Add new service offerings
- **Update Service** - Modify existing service information
- **Delete Service** - Remove service from database

### Contact Management

- **Submit Contact Form** - Handle contact form submissions
- **Get Contact Messages** - Retrieve all contact messages (admin only)
- **Delete Contact Message** - Remove contact message (admin only)

## Configuration

Create a `.env` file based on `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/club-informatique
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## API Documentation

API endpoints are documented using Postman collections. Import the collection from `docs/club-informatique-api.postman_collection.json`.

## Database

### Collections

1. **users** - Admin users with authentication information
2. **projects** - Project portfolio data
3. **activities** - Club events, workshops, and training
4. **services** - Service offerings
5. **contactMessages** - Contact form submissions

## Contributing

Please follow the contributing guidelines in the root README.md file.
