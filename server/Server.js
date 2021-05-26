require('./config/config');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use('/api/user', require('./routes/user'));

app.listen(3000, () => {
  console.log("Listen port ", process.env.PORT);
})