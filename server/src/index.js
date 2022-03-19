const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const MessageRoute = require('./routes/Messages');
const UserRoute = require('./routes/User');


app.use(express.json());
app.use(cors())

const URI = process.env.MONGO_URI;
mongoose.connect(URI)

const connection = mongoose.connection;
connection.once('open', () =>{
	console.log('Database connection established successfully');
})
const PORT = 4000;
app.use('/api/chat', MessageRoute);
app.use('/api/user', UserRoute);
app.get('/api',(req, res, next) => {
	
	res.json({Message:"Hello From APIS...."})
})

app.listen(PORT,()=>{
	console.log('listening on port: '+ PORT)
})
