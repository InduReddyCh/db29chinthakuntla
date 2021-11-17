var express = require('express');
const ball_controller=require('../controllers/ball');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ball', { title: 'Search Results Ball' });
});
router.get('/ball/:id', ball_controller.ball_detail);
module.exports = router;
/* GET detail ball page */
router.get('/detail', ball_controller.ball_view_one_Page);