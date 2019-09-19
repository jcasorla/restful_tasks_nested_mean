const mongoose = require('mongoose');
const Task = mongoose.model('Task');

const task = require('../controllers/task.js');

module.exports = function(app){

	app.get('/tasks', function(req, res) {
	    task.show(req,res);
	});

	app.get('/tasks/:id', function(req, res) {
	    task.show_one(req,res);
	});

	app.post('tasks/create', function(req, res) {
	    task.create(req,res);
	});

	app.put('tasks/update/:id', function(req, res) {
	    task.update(req,res);
	});

	app.delete('tasks/delete/:id', function(req, res) {
	    task.remove(req,res);
	});
};