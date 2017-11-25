const fs = require('fs');
const exec = require('child_process').exec;
const express = require('express');
const app = express();

/* Load config */
const config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));

/* Emitter script */
const emit = function(command) {
	console.log('Emitting ' + command.name + ' \''+ command.code +'\'');

	exec([__dirname + '/build/codesend',
		'--code',			command.code,
		'--pin',				config.gpio.pin,
		'--pulse-length', config.gpio.pulseLength
	].join(' '), function (error, stdout, stderr) {
		error = error || stderr;
		if(error) { console.warn(error); }
  });
}

/* Expose route for each code */
config.commands.forEach(function(command) {
	var name = Object.keys(command)[0];
	command = {
		name: name,
		code: command[name]
	}

	app.get('/'+command.name, function (req, res) {
		emit(command);

		res.sendStatus(200);
	});
});

/* Expose index.html for easy testing */
app.get('/', function(req, res) {
		res.sendFile(__dirname + '/index.html');
});

/* Start Express server */
app.listen(config.httpPort);