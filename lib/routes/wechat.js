var express = require('express');
var router = express.Router();
var wechatController = require('../controllers/wechat');

router.get('/', wechatController.checkSignature);

router.post('/', wechatController.postMsg);

module.exports = router;