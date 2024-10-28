require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/TaskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (use your MongoDB connection string from .env)
mongoose.connect(process.env.MONGODB_URI, {
  
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
