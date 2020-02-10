const request = require('request');
const express = require('express');
const app = express();
const port = 2880;
const url = 'http://localhost:1880/nukibridge?test=data';
const user = 'hxme';
const pass = '';

app.get('/nukibridge', function (req, res) {

    request.get(url, {
        'auth': {
          'user': user,
          'pass': pass
        }
    }, function (error, response, body) {
        if (error) console.log(error);
        console.log(JSON.stringify(response));
        console.log(response.statusCode);
        res.sendStatus(response.statusCode);
    });

});

app.listen(port, function () {
    console.log('Started Nuki Workaround! Port: ' + port);
});



