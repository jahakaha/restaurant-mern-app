const express = require('express');
const app = express();
const connectDB = require('./database/db');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/auth')

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes);


connectDB();

app.get('/', (req, res)=>{
    res.send('Inside Server')
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
