﻿var express = require('express');
var app = express();
var infoFile = require('./data/myInfo.json');
app.set('port', process.env.PORT || 80);
app.set('appData', infoFile);
app.set('view engine', 'ejs');
app.set('views', './Server/views');

app.use(express.static('./Server/public/'));
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/infoapi'));
app.use(require('./routes/about'));
app.use(require('./routes/tweets'));

var tendoServer = app.listen(app.get('port'), function () {
    console.log('Listening on ' + app.get('port'));
});
