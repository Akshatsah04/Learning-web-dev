require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


//connect db
const connectdb = require('./db/connect')


// routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)
// app.get('/', (req, res) => {
//   res.send('jobs api');
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("Mongo error:", err));
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    // console.log(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
