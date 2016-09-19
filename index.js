var express = require('express'),
    bodyParser     = require('body-parser'),
    students = require('./routes/students'),
    app = express();

app.use(bodyParser());

app.get('/students', students.findAll);
app.get('/students/:id', students.findById);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});