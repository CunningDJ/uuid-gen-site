'use strict';

let http = require('http');

let express = require('express');

let cfg = require('./config');
let util = require('./util');

var app = express();

var server = new http.Server(app);

// statics
app.use('/', express.static('public', { extensions: ['html']}));

// API: new UUID
app.use('/api/uuid', function(req, res, next) {
    res.send(util.newUUID());    
});



// Listening
server.listen(cfg.port, function(err) {
    if (err) {
        return console.error('SERVER ERROR:\n', err);
    }
    console.log('SERVER SUCCESS: Serving on port', cfg.port);
});
