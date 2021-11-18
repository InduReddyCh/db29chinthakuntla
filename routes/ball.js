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
/* GET create ball page */
router.get('/create', ball_controller.ball_create_Page);
/* GET create update page */
router.get('/update', ball_controller.ball_update_Page);