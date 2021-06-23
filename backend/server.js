const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes')
const cors = require('cors')
const signinUrls = require('./routes/signinRoutes')


const app = express();

dotenv.config() //configured in .env file

// mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))
// DATABASE_ACCESS : "mongodb+srv://poorva:root123@cluster0.habtj.mongodb.net/signuptable?retryWrites=true&w=majority"
const dbURI = 'mongodb+srv://poorva:root123@cluster0.habtj.mongodb.net/dribble_db?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Database Connected"))
     .catch(error => {console.log(error)})

app.use(express.json())
app.use(cors());
app.use('/api', routesUrls)
app.use('/api', signinUrls)

// app.listen(5000, ()=> (console.log("server is running")))    

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode");
  });