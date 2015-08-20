/**
 * Created by vitaly on 5/7/15.
 */

var express = require('express');
var app = express();
var routes = require('./routes');


app.set('view engine', 'ejs')

app.locals.pageTitle = "Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res) {
    var name = req.params.name,
        title = req.params.title;
    res.send('Bad route');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});

