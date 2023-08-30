const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors')

// const router = require('./routes/routes')
const url = "mongodb+srv://anuwat40350:anuwat2541@cluster0.t2azohz.mongodb.net/"
const app = express();
// app.use(cors())
app.use(express.json());
// app.use(router);

//Connect mongoDB
mongoose.connect(url, { useNewUrlParser: true })
mongoose.connection.on('error', (err) => {
  console.error('MongoDB error', err);
});

app.listen(3000, () => {
  console.log('Application is running on port 3000');
});

app.post("/welcome", (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});