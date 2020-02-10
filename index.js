const request = require('request');
const express = require('express');
const app = express();
const port = 2880;
const url = 'http://user:pass@localhost:1880/nukibridge';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/nukibridge').post(function (req, res) {
    request({
        method: 'post', 
        url: url, 
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(response.statusCode + ': ' + JSON.stringify(req.body));
    });
    res.sendStatus(200);
});

app.listen(port, function () {
    console.log('Started Nuki Workaround. Port: ' + port);
});
