const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const userRouter = require('./routes/user.routes');
const contactRouter = require('./routes/contact.routes');

const app = express();
const corsOptions = { origin: 'http://localhost:4200', credentials: true };

// cross origin
app.use(cors(corsOptions));

app.use(
  session({
    secret: 'nottellingmysecret',
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false,
  })
);
//cookie
app.use(cookieParser());

//parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter, contactRouter);

//set port and listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
