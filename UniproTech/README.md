# Club Informatique Website

A modern, responsive website for the Club Informatique with dynamic content management system.

## Project Overview

This project aims to create a professional website for the Club Informatique that allows:
- Presentation of the club and its activities
- Portfolio showcase of projects and achievements
- Service offerings (website creation, IT services)
- Dynamic content management via an admin dashboard

## Tech Stack

### Frontend
- React 18+
- TypeScript
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer for file uploads

### Development Tools
- Postman (API testing)
- Git & GitHub (version control)

## Project Structure

```
club-informatique/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service calls
│   │   ├── types/           # TypeScript type definitions
│   │   ├── utils/           # Utility functions
│   │   ├── hooks/           # Custom React hooks
│   │   ├── assets/          # Static assets (images, fonts)
│   │   └── App.tsx          # Main application component
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── tailwind.config.js
├── backend/                  # Node.js API
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── middlewares/     # Express middlewares
│   │   ├── config/          # Configuration files
│   │   ├── utils/           # Utility functions
│   │   ├── services/        # Business logic
│   │   └── server.js        # Server entry point
│   ├── uploads/             # Uploaded files storage
│   ├── package.json
│   └── .env.example
└── README.md                # Project documentation
```

## Features

### User Features
- Home page with club introduction
- About page with club information (vision, objectives)
- Portfolio page with dynamic project listings
- Services page with service offerings
- Contact page with contact information and form

### Admin Features
- Secure login with JWT authentication
- Dashboard for content management
- Project management (create, edit, delete)
- Activity management (events, workshops, training)
- Service management (add, edit, delete services)
- Content update for all pages

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies for both frontend and backend
3. Set up environment variables
4. Start the development servers

For detailed instructions, see the respective README files in frontend/ and backend/ directories.

## Deployment

The project is configured for deployment on GitHub Pages (frontend) and Heroku or Vercel (backend). Detailed deployment instructions are provided in the respective directories.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
