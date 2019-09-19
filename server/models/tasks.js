const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task', {useNewUrlParser: true});

const Schema = new mongoose.Schema({
    title: {type: String}, description: {type: String}, completed: {Type: Boolean, default: false}
});

const People = mongoose.model('Task', Schema);