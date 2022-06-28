const express = require('express'); 
const app = express();
const cors = require('cors');
const dotenv =  require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const multer = require('multer');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB')).catch((err) => console.log(err ));

app.use(
    cors({
        origin:'*'
    }))

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
 

app.listen('8000', () => {
    console.log('Backend is running')
})