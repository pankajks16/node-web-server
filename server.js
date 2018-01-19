const express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
	//res.send('<h3> Hello Pankaj </h3>');
	res.send({
		name: 'PANKAJ',
		skills: [ 'Java', 'Ruby', 'NODE-Js'],
		qualification: 'B.E.'
	});	
});

app.get('/error', (req, res) => {
	res.send('<h3 style="color:red;"> Error Page </h3>');	
});

app.get('/about', (req, res) => {
	res.send('<h3> About Page </h3>');	
});

app.listen(3000, () => {
	console.log('Server is up port 3000 !!!');
});

