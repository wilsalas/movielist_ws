const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
//settings
require("dotenv").config();
require("./config/db");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
app.use(express.static(path.join(__dirname, './public')));
//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use(require('./routes/router'));
//server start
const port = process.env.PORT;
app.listen(port, () => console.log(`Server on port ${port}`));

