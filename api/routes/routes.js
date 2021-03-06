var multer = require('multer');
var bodyParser = require('body-parser'),
    path = require('path'),
    query_controller = require('../controllers/index');

module.exports = function (app, db_pool) {

  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  app.use(multer());

  app.route('/').all(function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendfile(path.resolve('index.html') );
  });


  app.route('/api/tools')
    .get(query_controller.getTools)
    .post(query_controller.createTool);

  app.route('/api/tools/:id')
    .get(query_controller.getToolById);

  app.route('/api/tools/update')
    .post(query_controller.updateTool);

  app.route('/api/tools/delete/:id')
    .delete(query_controller.deleteTool);

  app.route('/api/locations')
    .get(query_controller.getLocations);

  app.route('/api/wood')
    .get(query_controller.getWood);

  app.route('/api/wood/:id')
    .get(query_controller.getWoodById);

  app.route('/api/wood/update')
    .post(query_controller.updateWood);

  app.route('/api/woodtype')
    .get(query_controller.getWoodTypes);

  app.route('/api/wood/type/:type')
    .get(query_controller.getWoodByType);

  app.route('/api/wood/quantity/low')
    .get(query_controller.lowQuantityReport);



    //
  //// Single article routes
  //app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
  //  .get(articles.read)
  //  .put(articles.update)
  //  .delete(articles.delete);

  // Finish by binding the article middleware
  //app.param('articleId', articles.articleByID);
};