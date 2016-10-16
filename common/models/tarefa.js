'use strict';

module.exports = function(Tarefa) {
	Tarefa.afterRemote ('create', function (context, modelInstance, next) {   
	  var Pushwoosh = require('pushwoosh-client');
	  var client= new Pushwoosh("54060-A6193", "og0VGOssJt1r2l9NBU6XtlxqZLqtGbdfTc6QefB9DHjFbZAwiCUNe72J5wxUZowbYrL6WGevWR52vDxHy8CE");
	  
	  client.sendMessage('Uma nova tarefa foi atribuida a você', function(error, response) {
		 
	  });
	  next();
	});
};


