require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
// Import and use auth routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);
// Basic route
app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
