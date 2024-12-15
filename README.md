# last-hope-terminal

#### File Structure
last-hope-terminal/
├── backend/                     # Backend folder
│   ├── controllers/             # Logic for handling routes
│   │   ├── authController.js
│   │   ├── broadcastController.js
│   │   └── reportController.js
│   ├── models/                  # Mongoose models
│   │   ├── User.js
│   │   ├── Broadcast.js
│   │   └── Report.js
│   ├── routes/                  # Route definitions
│   │   ├── authRoutes.js
│   │   ├── broadcastRoutes.js
│   │   └── reportRoutes.js
│   ├── middlewares/             # Custom middleware (e.g., auth)
│   │   └── authMiddleware.js
│   ├── utils/                   # Helper functions (e.g., JWT utilities)
│   │   └── jwtUtils.js
│   ├── app.js                   # Express app setup
│   ├── server.js                # Server entry point
│   └── config/                  # Configuration files
│       └── dbConfig.js
├── frontend/                    # Frontend folder
│   ├── public/                  # Static assets (favicon, etc.)
│   ├── src/                     # React or other frontend framework code
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── BroadcastCard.js
│   │   │   └── ReportForm.js
│   │   ├── pages/               # Page components
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── context/             # Context providers (e.g., AuthContext)
│   │   ├── hooks/               # Custom hooks (e.g., useAuth)
│   │   ├── styles/              # CSS/SCSS files
│   │   ├── App.js               # Main app component
│   │   └── index.js             # React entry point
│   └── package.json             # Frontend dependencies
├── .env                         # Environment variables
├── .gitignore                   # Git ignored files
├── package.json                 # Backend dependencies
└── README.md                    # Project documentation
