// "type": "module",
// ,
//     "dotenv": "^16.4.5",
//     "shortid": "^2.2.16",
//     "ts-node": "^10.9.2"
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

import dotenv from "dotenv"
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import bodyParser from "body-parser"
import usersRouter from './routers/usersRouter.js';
import linksRouter from './routers/linksRouter.js';
import connectDB from "./database.js";

dotenv.config();

connectDB();
const app = express();
app.use(bodyParser.json())
const port = process.env.PORT || 3000;

// חיבור ל-MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// הגדרת Routers
// const linkRouter = require('src/routes/linkRouter');
// const userRouter = require('src/routes/userRouter');

app.use(cors());

app.get('/', (req, res) => {
  res.send('👌 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣 👌');
});

app.use('/links', linksRouter);
app.use('/users', usersRouter);

// הפעלת האפליקציה
app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
  console.log('👌 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣 👌');
});

