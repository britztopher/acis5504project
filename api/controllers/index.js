var Acis5504project = require('../../db/acis5504db')
  , db_pool = new Acis5504project();

var _ = require('lodash'),
  path = require('path');


exports.getTools = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT *  FROM TOOL, LOCATION where TOOL.LOCATION_ID=LOCATION.LOCATION_ID', function (err, rows) {

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

exports.getWood = function (req, res) {
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT *  FROM wood, location, wood_type ' +
    'where wood.location_id=location.location_id ' +
    'and wood.wood_type_id = wood_type.wood_type_id', function (err, rows) {

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
  db_pool.getConnection(function (err, connection) {
    console.log('REQUEST PARAMS: ', req.params);
    // Use the connection
    connection.query('SELECT WOOD_TYPE.WOOD_TYPE, WOOD.WOOD_LENGTH, WOOD.WOOD_WIDTH, WOOD.WOOD_THICKNESS, ' +
    'WOOD.WOOD_QUANTITY, LOCATION.LOCATION_NAME, LOCATION.LOCATION_DESC ' +
    'FROM WOOD, WOOD_TYPE, LOCATION ' +
    'WHERE WOOD.LOCATION_ID = LOCATION.LOCATION_ID ' +
    'AND WOOD.WOOD_TYPE_ID = WOOD_TYPE.WOOD_TYPE_ID AND WOOD_TYPE.WOOD_TYPE LIKE ?'
    ,[req.params.type],function (err, rows) {

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

  console.log(req.body);

  db_pool.getConnection(function (err, connection) {

    //TODO NEED TO RUN A QUERY TO MAKE SURE PARTICAPANT ISNT ALREADY REGISTERED BEFORE INSERTING INTO
    //PARTICAPANTS TABLE

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

  console.log('REQ BODY: ', req.body);
  db_pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('update tool set TOOL_NAME = ?, ' +
    'TOOL_DESC = ? ' +
    'where TOOL_ID = ?', [req.body.tool.TOOL_NAME, req.body.tool.TOOL_DESC, req.body.tool.TOOL_ID], function (err, rows) {

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
    connection.query('SELECT *  FROM location', function (err, rows) {

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
    connection.query('SELECT wood_type FROM wood_type', function (err, rows) {

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

