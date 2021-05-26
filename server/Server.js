require('./config/config');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors()); 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/api/user', require('./routes/user'));

app.listen(3000, () => {
  console.log("Listen port ", process.env.PORT);
})