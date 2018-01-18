const express = require('express');

var app = express();

app.get('/', (req, res) => {
	//res.send('<h3> Hello Pankaj </h3>');
	res.send({
		name: 'PANKAJ',
		skills: [ 'Java', 'Ruby', 'NODE-Js'],
		qualification: 'B.E.'
	});	
});


app.listen(3000);

