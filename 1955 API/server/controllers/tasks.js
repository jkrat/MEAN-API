
var Person = require('../models/task.js');

    class PersonController {
        constructor() {
        }
        all(req, res) {
            Person.find({}, function(err, persons) {
                if (err) {
                  console.log("Returned error", err);
                  res.json({message: "Error", error: err});
                } else {
                  res.json({message: "Success", persons: persons})
                }
            })
        }
        
        create(req, res) {
            let person = new Person({name : req.params.name});
            person.save(function(err) {
                if (err) {
                    return res.json (err);
                } else {
                    return res.json({message: "Success", person: person})
                } 
             })
        }

        find(req, res) {
            Person.find({name: req.params.name}, function(err, person) {
              if (err) {
                  res.json({message: "Error", error: err});
              } else {
                  res.json({message: "Success", person: person})
              }
            })
        }

        destroy(req, res) {
            Person.remove({name: req.params.name}, function(err) {
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

    module.exports = new PersonController();
