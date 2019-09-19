const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {

	show: function(req,res){
		Task.find({},function(err,task){
            if (err){
                res.json(err);
            }
            else{
                res.json(task);
            }
        })
    },

	show_one: function(req,res){
		Task.findOne({_id:req.params.id},function(err,task){
            if (err){
                res.json(err);
            }
            else{
                res.json(task);
            }
		});
	},

	create: function(req,res){
        // var newTask = new Task ({title: req.params.title, description: req.params.description, completed: req.params.completed});
        // console.log(req.body)
		Task.create(req.body, function(err, data){
			if (err){
                res.json(err);
            }
            else{
               res.json(data)
            }
        })
    },

    update: function(req,res){
        var id=req.params.id;

        Task.updateOne({_id:id}, {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
        
    },function(err, data){
        if (err){
            res.json(err);
        }
        else{
           res.json(data)
        }})
       
    },

	remove: function(req,res){
		Task.deleteOne({_id:req.params.id},function(err,task){
			if(err){
				res.json(err);
            }else{
                res.json(task);
            }
		})
	},
}
