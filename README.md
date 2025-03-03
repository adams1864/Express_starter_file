MERN Backend Starter
This is a backend starter project for a MERN (MongoDB, Express, React, Node.js) stack application. It provides basic user authentication functionality including registration and login.

.env
.qodo/
controllers/
index.js
models/
    user.js
package.json
routes/
    auth.js

    Files and Directories
.env: Contains environment variables such as PORT, MONGODB_URI, and JWT_SECRET.
index.js: The main entry point of the application. It sets up the Express server, connects to MongoDB, and configures middleware.
models/user.js: Defines the User model using Mongoose.
routes/auth.js: Contains routes for user registration and login.


Getting Started

Prerequisites

Node.js

MongoDB

Installation

1. Clone the repository:

  git clone <repository-url>

2. Navigate to the project directory:

  cd mern-backend

3. Install dependencies:
   
   npm install


Configuration

Create a .env file in the root directory and add the following environment variables:

   PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

Running the Application:
  npm start
  

The server will run on http://localhost:5000.

API Endpoints
Register
URL: /auth/register
Method: POST
Body:

{
    "username": "your-username",
    "password": "your-password"
}

Login
URL: /auth/login
Method: POST
Body:


{
    "username": "your-username",
    "password": "your-password"
}


Dependencies
express: Web framework for Node.js
cors: Middleware for enabling CORS
dotenv: Loads environment variables from a .env file
mongoose: MongoDB object modeling tool
bcrypt: Library for hashing passwords
jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT)














    
