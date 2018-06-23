const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer({dest: 'upload/pic/'})

const config = require('./config');

const app = express();

var DATA = [];

// console.log(config);

//Middleware

//BodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Express
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/groot',(req,res) => {
    res.sendFile(__dirname + '/public/groot.html');
});

app.get('/profile',(req,res) => {
    res.json(DATA);
})

app.post('/profile', upload.single('profile'), (req, res) => {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
  })

app.listen(config.port,(err) => {
    if(err) {console.error(err)}
    console.log("Server connected to http://localhost:"+config.port);
})