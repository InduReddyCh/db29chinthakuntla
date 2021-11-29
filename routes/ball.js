var express = require('express');
const ball_controller=require('../controllers/ball');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or

// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
   return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

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
/* GET update ball page */
router.get('/update',secured, ball_controller.ball_update_Page);
/* GET create ball page */
router.get('/delete', ball_controller.ball_delete_Page);