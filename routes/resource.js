var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ball_controller = require('../controllers/ball');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// ball ROUTES ///
// POST request for creating a ball.
router.post('/resource/ball', ball_controller.ball_create_post);
// DELETE request to delete ball.
router.delete('/resource/ball/:id', ball_controller.ball_delete);
// PUT request to update ball.
router.put('/resource/ball/:id', ball_controller.ball_update_put);
// GET request for one ball.
router.get('/resource/ball/:id', ball_controller.ball_detail);
// GET request for list of all ball items.
router.get('/resource/ball', ball_controller.ball_list);
module.exports = router;