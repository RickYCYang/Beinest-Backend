var express = require("express") ;
var app = express();

app.get('/', function(req, res){
    res.send('HelloWorld');
});

var portfolio = require('./routes/portfolio');
app.use('/portfolio', portfolio);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Started on ", port);
});
  