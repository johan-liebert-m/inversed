const express = require('express');
const app = express();
const port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

//url without .html extension
app.use(express.static(__dirname + '/public', { extensions: ['html'] }));

//static folder
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.sendFile( __dirname + '/public/' + 'inversed.html');
});

//lestening port
app.listen(port);

//errors handling
const errors = require('./errorsHandling');
app.use(errors.onError404);
app.use(errors.onError500);
