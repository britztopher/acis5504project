var multer = require('multer');
var bodyParser = require('body-parser'),
    path = require('path'),
    query_controller = require('../controllers/index');

module.exports = function (app) {

  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  app.use(multer());

  app.route('/').all(function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendfile(path.resolve('index.html') );
  });

  app.route('/api/tools')
    .get(query_controller.getTools)
    //.get(articles.list)
    //.post(articles.create);
    //
  //// Single article routes
  //app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
  //  .get(articles.read)
  //  .put(articles.update)
  //  .delete(articles.delete);

  // Finish by binding the article middleware
  //app.param('articleId', articles.articleByID);
};