var Acis5504project = require('../../db/acis5504db')
  , db_pool = new Acis5504project();

var _ = require('lodash'),
  path = require('path');


exports.getTools = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT *  FROM tool', function (err, rows) {

      if (err) {
        throw err
      }

      console.log('rows: ', rows);

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}