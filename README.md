# Rail Dost - Train Ticket Booking System

A modern, user-friendly train ticket booking application that allows users to book train seats with ease and convenience.

## Project Overview

Rail Dost is a full-stack application designed to simplify the train ticket booking process. The system features:

- Intuitive user interface with a clean, modern design
- Interactive seat selection with visual representation
- Secure user authentication and booking management
- Responsive design for all devices
- Real-time seat availability updates

## Tech Stack

### Frontend
- React.js with Vite
- Context API for state management
- CSS for styling with responsive design
- React Router for navigation

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- RESTful API architecture

## Features

### User Experience
- Clean, modern UI with gray color scheme
- Responsive design for all screen sizes
- Interactive seat selection interface
- Real-time booking status updates

### Authentication
- User registration and login
- JWT-based authentication
- Protected routes for authenticated users
- Role-based access control (Admin/User)

### Booking System
- Visual seat selection with availability indicators
- Smart seat allocation algorithm
- Booking history management
- Booking cancellation functionality

### Admin Features
- Dashboard for managing bookings
- Seat initialization and reset capabilities
- User management

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB account

### Backend Setup
1. Clone the repository
   ```
   git clone https://github.com/DeepaSingh04/train.git
   cd train-ticket-booking/backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables
   ```
   PORT=5000
   MONGO_URI=your_mongodb_cluster_url
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```

4. Start the backend server
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```
   cd ../frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the frontend directory
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server
   ```
   npm run dev
   ```

## Project Structure

```
train-ticket-booking/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── .env            # Environment variables
│   ├── server.js       # Entry point
│   └── package.json    # Dependencies
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # React context providers
│   │   ├── pages/      # Page components
│   │   ├── services/   # API service functions
│   │   ├── App.jsx     # Main application component
│   │   └── main.jsx    # Entry point
│   ├── .env            # Environment variables
│   └── package.json    # Dependencies
└── README.md           # Project documentation
```

## Key Components

### Frontend
- **Home Page**: Landing page with service information and call-to-action
- **Login/Register**: User authentication pages
- **Booking Page**: Interactive seat selection interface
- **My Bookings**: User's booking history and management
- **Admin Dashboard**: Admin interface for managing the system

### Backend
- **Authentication**: User registration, login, and profile management
- **Seat Management**: Seat availability and allocation
- **Booking System**: Booking creation, retrieval, and cancellation
- **Admin Controls**: System management functions

## Deployment

### Backend Deployment
The backend can be deployed to any Node.js hosting platform:
- Vercel
- Render
  

### Frontend Deployment
The frontend can be deployed to:
- Vercel
- Netlify
- 

## Testing

To test the application:
1. Register a new user account
2. Log in to access the booking system
3. Select seats and complete a booking
4. View and manage your bookings
5. Test the responsive design on different devices

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons and illustrations from various sources
- Inspiration from modern web design trends
- Feedback from users and contributors
