var express = require('express');
var app = express();
var infoFile = require('./Server/data/myInfo.json');
app.set('port', process.env.PORT || 80);
app.set('appData', infoFile);
app.set('view engine', 'ejs');
app.set('views', './Server/views');

app.use(express.static('./Server/public/'));
app.use(require('./Server/routes/index'));
app.use(require('./Server/routes/feedback'));
app.use(require('./Server/routes/api'));
app.use(require('./Server/routes/infoapi'));
app.use(require('./Server/routes/about'));
app.use(require('./Server/routes/tweets'));

var tendoServer = app.listen(app.get('port'), function () {
    console.log('Listening on ' + app.get('port'));
});
