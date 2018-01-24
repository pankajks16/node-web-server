const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});


app.use((req, res, next) => {
	
});

app.get('/', (req, res) => {
	//res.send('<h3> Hello Pankaj </h3>');
	// res.send({
	// 	name: 'PANKAJ',
	// 	skills: [ 'Java', 'Ruby', 'NODE-Js'],
	// 	qualification: 'B.E.'
	// });
	//console.log(req)b;
	//console.log(res);
	// console.log('\n ........ \n .............');
	// console.log(res.getHeaders());
	// console.log(res.header());
	res.render('rootPage.hbs', {
		welcomeMessage: 'This is a root page ...!',
		content: 'Welcome to the project home root page ... !'
	});

});

app.get('/error', (req, res) => {
	res.send('<h3 style="color:red;"> Error Page </h3>');	
});

app.get('/about', (req, res) => {
	// res.send('<h3> About Page </h3>');	
	res.render('about.hbs', {
		welcomeMessage: 'Welcome to About Page',	
		content: 'This is a sample Text on about page'
	});
});


app.get('/home', (req, res) => {
	// res.send('<h3> About Page </h3>');	
	res.render('home.hbs', {
		welcomeMessage: 'Welcome to Home Page',
		content: 'This is a sample Text on home page'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000 !!!');
});

