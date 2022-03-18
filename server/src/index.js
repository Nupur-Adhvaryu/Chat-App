const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const MessageRoute = require('./routes/Messages');


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
app.get('/api',(req, res, next) => {
	
	res.json({Message:"Hello From APIS...."})
})

app.listen(PORT,()=>{
	console.log('listening on port: '+ PORT)
})
