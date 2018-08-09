
var Task = require('../models/task.js');



    class TaskController {
        constructor() {
        }
        all(req, res) {
            Task.find({}, function(err, tasks) {
                if (err) {
                  console.log("Returned error", err);
                  res.json({message: "Error", error: err});
                } else {
                  res.json({message: "Success", tasks: tasks})
                }
            })
        }
        
        create(req, res) {
            let task = new Task(req.body);
            console.log(req.body);
            task.save(function(err) {
                if (err) {
                    return res.json (err);
                } else {
                    return res.json({message: "Success", task: task})
                } 
             })
        }

        findById(req, res) {
            let id = req.params.id;
            Task.find({_id: id}, function(err, task) {
              if (err) {
                  console.log("Returned error", err);
                  res.json({message: "Error", error: err});
              } else {
                  console.log('successfully retrieved a task!', task);
                  res.json({message: "Success", task: task})
              }
            })
          
        }

        update(req, res) {
            let id = req.params.id;
            Task.findById(id, function(err, task) {
              if (err) {
                console.log('something went wrong');
              } else {
                if (req.body.title) {
                  task.title = req.body.title;
                }
                if (req.body.description) {
                  task.description = req.body.description;
                }
                if (req.params.completed) {
                  task.completed = req.body.completed;
                }
                task.save(function(err) {
                  // if there is an error console.log that something went wrong!
                  if (err) {
                      console.log("Returned error", err);
                      res.json({message: "Error", error: err});
                  } else { // else console.log that we did well and then redirect to the root route
                      console.log('successfully edited a task!');
                      res.json(task)
                  }
                })
              }
            })
        }

        destroy(req, res) {
            let id = req.params.id;
            Task.remove({_id: id}, function(err) {
              if (err){
                res.json({message: "Error", error: err});
              }else {
                res.json({message: "Success"})
              }
            })
        }

        connection() {
            console.log("listening on port 8000");
        }
    }

    module.exports = new TaskController();
