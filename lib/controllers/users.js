var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.index = function (req, res, next) {
  res.send('respond with a resource');
};

module.exports.testmongo = function (req, res, next) {
  var user = new User({
    uid: 1,
    username: 'Sid'
  });
  user.save(function (err) {
    if (err) {
      res.end('Error');
      return next();
    }

    User.find({}, function (err, docs) {
      if (err) {
        res.end('Error');
        return next();
      }
      res.json(docs);
    })
  });
}