var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');

/* GET home page. */
router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/books', homeController.books);
router.get('/book', homeController.bookview);
router.post('/book', homeController.bookCreate);
router.get('/detail/:id', homeController.detail);

module.exports = router;
