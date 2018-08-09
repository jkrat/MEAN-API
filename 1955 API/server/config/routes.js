
const PersonController = require('../controllers/tasks');

module.exports = function(app){
    app.get('/', PersonController.all);
    app.get('/new/:name/', PersonController.create);
    app.get('/remove/:name/', PersonController.destroy);
    app.get('/:name/', PersonController.find);
    app.listen(8000, PersonController.connect);
};


