var express = require("express") ;
var app = express();
var cors = require('cors');

///For Static Files
app.use(express.static('public'));

///For deal with Browser's cors polycy
app.use(cors());

/* Middleware to verify header app-key */
app.use(function (req, res, next) {
    const appKey = req.headers['app-key'];
    if(appKey === 'beinest'){
        next();
    }else{
        res.status(400).send({'message': 'No authentication'});
    }
});
  
app.get('/', function(req, res){
    res.send('HelloWorld');
});

var portfolio = require('./routes/portfolio');
app.use('/portfolio', portfolio);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Started on ", port);
});
  