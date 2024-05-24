const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/middle');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
 });


const port = 5000;

app.use('/',routes)






mongoose.connect(
    'mongodb+srv://Webdeveloper:Madhu@cluster0.rb2sv.mongodb.net/travel-ease?retryWrites=true&w=majority',
    {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }
).then(sucess => {
     app.listen(port,(req,res)=>{
          console.log("connected to db");
          console.log("server is running " + port);
     })
}).catch(err => {
     console.log("database not connected" + err);
})

