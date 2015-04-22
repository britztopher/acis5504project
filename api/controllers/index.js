var Acis5504project = require('../../db/acis5504db')
  , db_pool = new Acis5504project();

var _ = require('lodash'),
  path = require('path');

exports.getToolById = function (req, res) {

  db_pool.getConnection(function (err, connection) {

    if (req.params.id) {
      // Use the connection
      connection.query('SELECT *  FROM TOOL, LOCATION where TOOL.LOCATION_ID=LOCATION.LOCATION_ID AND TOOL_ID = ?',
        [req.params.id], function (err, rows) {

          if (err) {
            throw err
          }

          res.send(rows[0])
          // And done with the connection
          connection.release();

          // Don't use the connection here, it has been returned to the pool.
        });
    } else {
      res.send('NO TOOL ID DEFINED');
    }
    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

exports.getTools = function (req, res) {

  db_pool.getConnection(function (err, connection) {

    // Use the connection
    connection.query('SELECT *  FROM TOOL, LOCATION WHERE TOOL.LOCATION_ID=LOCATION.LOCATION_ID',
      function (err, rows) {

        if (err) {
          throw err
        }

        res.send(rows)
        // And done with the connection
        connection.release();

        // Don't use the connection here, it has been returned to the pool.
      });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

exports.deleteTool = function (req, res) {

  console.log('REQ.Params: ', req.params);
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('DELETE FROM TOOL WHERE TOOL_ID = ?', [req.params.id], function (err, rows) {

      if (err) {
        throw err
      }

      res.send('Deleted Tool Successfully');
      // And done with the connection
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

exports.getWoodById = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection

    connection.query('SELECT * FROM WOOD, LOCATION, WOOD_TYPE ' +
      'WHERE WOOD.LOCATION_ID = LOCATION.LOCATION_ID ' +
      'AND WOOD.WOOD_TYPE_ID = WOOD_TYPE.WOOD_TYPE_ID ' +
      'AND WOOD.WOOD_ID = ?', [req.params.id],
     function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows[0])
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

exports.getWood = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT *  FROM WOOD, LOCATION, WOOD_TYPE ' +
    'WHERE WOOD.LOCATION_ID = LOCATION.LOCATION_ID ' +
    'AND WOOD.WOOD_TYPE_ID = WOOD_TYPE.WOOD_TYPE_ID', function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

exports.getWoodByType = function (req, res) {
  console.log('getWoodByType: ', req.params);
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT WOOD_TYPE.WOOD_TYPE, WOOD.WOOD_LENGTH, WOOD.WOOD_WIDTH, WOOD.WOOD_THICKNESS, ' +
      'WOOD.WOOD_QUANTITY, LOCATION.LOCATION_NAME, LOCATION.LOCATION_DESC ' +
      'FROM WOOD, WOOD_TYPE, LOCATION ' +
      'WHERE WOOD.LOCATION_ID = LOCATION.LOCATION_ID ' +
      'AND WOOD.WOOD_TYPE_ID = WOOD_TYPE.WOOD_TYPE_ID AND WOOD_TYPE.WOOD_TYPE LIKE ?'
      , [req.params.type], function (err, rows) {

        if (err) {
          throw err
        }

        res.send(rows)
        // And done with the connection.
        connection.release();

        // Don't use the connection here, it has been returned to the pool.
      });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}


exports.createTool = function (req, res) {


  db_pool.getConnection(function (err, connection) {

    console.log('req.body create tool: ', req.body);

    connection.query(
      'INSERT INTO TOOL ' +
      '( SHOP_ID, ' +
      'TOOL_NAME, ' +
      'TOOL_DESC, ' +
      'TOOL_TYPE_ID, ' +
      'LOCATION_ID) ' +
      'VALUES(?, ?, ?, ?, ?)',
      [req.body.SHOP_ID, req.body.TOOL_NAME, req.body.TOOL_DESC, req.body.TOOL_TYPE_ID, req.body.LOCATION_ID],

      function (err, updateRows) {

        if (err) {
          console.error('COULD NOT INSERT TOOL: ', err)
          connection.release();
          return;
        }

        connection.release();

        res.send(updateRows);
      });
  });
}

exports.updateTool = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('UPDATE TOOL SET TOOL_NAME = ?, ' +
    'TOOL_DESC = ? ' +
    'WHERE TOOL_ID = ?', [req.body.tool.TOOL_NAME, req.body.tool.TOOL_DESC, req.body.tool.TOOL_ID], function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });

}

exports.updateWood = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('UPDATE WOOD ' +
    'SET WOOD_QUANTITY = ? ' +
    'WHERE WOOD_ID = ?', [req.body.wood.WOOD_QUANTITY, req.body.wood.WOOD_ID], function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });

}


exports.getLocations = function (req, res) {

  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT *  FROM LOCATION', function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });

}

exports.getWoodTypes = function (req, res) {
  db_pool.getConnection(function (err, connection) {


    // Use the connection
    connection.query('SELECT WOOD_TYPE FROM WOOD_TYPE'
      , function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

exports.lowQuantityReport= function (req, res) {
  
  db_pool.getConnection(function (err, connection) {

    // Use the connection
    connection.query('SELECT WOOD_TYPE.WOOD_TYPE, WOOD.WOOD_LENGTH, WOOD.WOOD_WIDTH, WOOD.WOOD_THICKNESS, WOOD.WOOD_QUANTITY ' +
    'FROM WOOD, WOOD_TYPE ' +
    'WHERE  WOOD.WOOD_TYPE_ID = WOOD_TYPE.WOOD_TYPE_ID ' +
    'AND WOOD.WOOD_QUANTITY < 3'
      , function (err, rows) {

      if (err) {
        throw err
      }

      res.send(rows)
      // And done with the connection.
      connection.release();

      // Don't use the connection here, it has been returned to the pool.
    });

    //logger.info("MIGRATION SERVER SIDE COMMENCE!!");
  });
}

