// simple handler

exports.handler = function (event, context) {
	'use strict';
	console.log(event);
	context.succeed('greetings earth');
};