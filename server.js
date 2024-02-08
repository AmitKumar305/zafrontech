require('dotenv').config();
const express = require('express');
const connectDB = require('./db/index');
const busboyBodyParser = require('busboy-body-parser');
const AuthenticateAdmin = require('./middleware/authenticateAdmin');

const adminLogin = require('./controller/adminLogin');
const addJob = require('./controller/addJob');
const listJobs = require('./controller/listJobs');
const applyForJob = require('./controller/applyForJob');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(busboyBodyParser());

connectDB();

const port = process.env.PORT || 3000;

app.post('/api/adminLogin', adminLogin);
app.post('/api/addJob', AuthenticateAdmin, addJob);
app.get('/api/listJobs', listJobs);
app.post('/api/apply', applyForJob);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})