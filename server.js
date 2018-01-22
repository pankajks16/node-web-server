const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
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
	// res.send('<h3> About Page </h3>');	
	res.render('about.hbs', {
		currentYear: new Date().getFullYear()
	});
});

app.listen(3000, () => {
	console.log('Server is up port 3000 !!!');
});

