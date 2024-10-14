const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();
const personRoutes = require('./routes/personRoutes');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json()); 
app.use('/person',personRoutes);

mongoose.connect("mongodb+srv://siddharthsingh0403:aK8rG57cHqpnoqyB@cluster0.cyrgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology : true
}).then(()=>{console.log("MongoDB connected Successfully")})
.catch((err)=>console.log("MongoDB not connected",err))

app.listen(PORT , ()=>{
    console.log(`Server is running on Port ${PORT}`)
})