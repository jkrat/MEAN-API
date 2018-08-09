
const TaskController = require('../controllers/tasks');

module.exports = function(app){
    app.get('/tasks', TaskController.all);
    app.post('/tasks', TaskController.create);
    app.get('/tasks/:id', TaskController.findById);
    app.patch('/tasks/:id', TaskController.update);
    app.delete('/tasks/:id', TaskController.destroy); 
    app.listen(8000, TaskController.connect);
};


