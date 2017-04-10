var express = require('express');
const SLR = require('ml-regression').SLR;
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(3000);

let inputs = [80, 60, 10, 20, 30];
let outputs = [20, 40, 30, 50, 60];

//let regression = new SLR(inputs, outputs);
//regression.toString(3) === 'f(x) = - 0.265 * x + 50.6';

app.post('/regressionModel/', function(req, res){
    var dataSentFromBrowser = req.body;
    var inputs = [];
    var outputs = [];

    for (index in dataSentFromBrowser)
    {
        inputs.push(dataSentFromBrowser[index].input);
        outputs.push(dataSentFromBrowser[index].output);
    }

    var requestedModel = new SLR(inputs, outputs);

    res.json(requestedModel);

});


//console.log(regression);

console.log('Server running on port 3000');
