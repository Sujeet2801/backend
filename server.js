
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Database connection
import Connection from './database/db.js';

// Routes
import Routers from './routes/route.js';

const app = express();
const port = process.env.REACT_APP_BACKEND_URL || 5000;

dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// DB connection
Connection(USERNAME, PASSWORD);

// Routes
app.use('/', Routers)

app.use("/", (req, res) => {
  res.send("Server is running")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
 });
