// In this file we will create the Express server 
const express = require('express')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const fooditmRoutes = require('./routes/fooditem.routes')


const app = express();
app.use(cookieParser());
app.use(express.json());


// Dummy route
app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

app.use('/api/auth', authRoutes);
app.use('/api/fooditem', fooditmRoutes);

module.exports = app;