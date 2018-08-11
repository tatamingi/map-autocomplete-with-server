const express = require('express');
const axios = require('axios');
const app = express();

app.get('/googleplace/:input', function (req, res) {
    const key = 'AIzaSyCU6bsx-PLT5fW02T5GeiwA8cOOY7l2rU4';
    const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + req.params.id + '&key=' + key;
    axios.get(url)
        .then(function (response) {
            if (response.data.status == "OK") {
                console.log(url);
                res.send(response.data.predictions);
            }
            else {
                res.status(400).send("Error");
            }
        })
        .catch(function (error) {
            res.status(500).send("There was an error!");
        });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

