/**
 * Loading environment variables
 */
if (!process.env.ENVIRONMENT) require('dotenv').config();

/**
 * Loading required modules
 */
const expressFileupload = require('express-fileupload');
const express = require("express");
const cors = require('cors');
const app = express();

/**
 * Loading api routes
 */
const userRoutes = require('./routes/user.routes');
const roomRoutes = require('./routes/room.routes');
const bookingRoutes = require('./routes/booking.routes');
const decorationRoutes = require('./routes/decoration.routes');

const connect = require('./database/mongodb');
/**
 * Configuring other functionality for our express app
 */
app.use(express.json());
app.use(
  expressFileupload({
    tempFileDir: 'tmp',
    useTempFiles: true,
    preservePath: true,
    safeFileNames: true,
    preserveExtension: true
  })
);

/**
 * Cors configuration
 */
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST']
  })
);

/**
 * Using api routes
 */ 
app.use('/api/auth', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/decorations', decorationRoutes);

/**
 * Serving the app
 */
app.listen(process.env.PORT, () => {
  connect(process.env.MONGODB_CONNECTION_STRING);
  console.log(`Listening on -> 0.0.0.0:${process.env.PORT}`);
});