var express = require("express") ;
var app = express();
var cors = require('cors');

///For Static Files
app.use(express.static('public'));

///For deal with Browser's cors polycy
app.use(cors());

// /* Middleware to verify header app-key */
// app.use(function (req, res, next) {
//     const appKey = req.headers['app-key'];
//     if(appKey === 'beinest' || req.url !== '/portfolio/'){
//         next();
//     }else{
//         res.status(400).send({'message': 'No authentication'});
//     }
// });

var portfolio = require('./routes/portfolio');
app.use('/portfolio', portfolio);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Started on ", port);
});
