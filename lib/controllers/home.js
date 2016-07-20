var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};
//if (process.env.NODE_ENV === 'production') {
//    apiOptions.server = "https://stoneniqiu-mean.herokuapp.com/ ";
//}

module.exports.ag = function (req, res) {
  res.render('home', {});
};
module.exports.index = function (req, res) {
  var requestOptions, path;
  path = "/api/topics";
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
  }
  request(requestOptions, function (err, response, body) {
    if (response.statusCode == 200) {
      res.render('index', {
        title: 'Index',
        topics: body
      });
    } else {
      res.render('error', {
        message: err.message,
        error: err
      });
    }
  });
};

module.exports.books = function (req, res) {
  var requestOptions, path;
  path = "/api/books";
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
  }
  request(requestOptions, function (err, response, body) {
    if (response.statusCode == 200) {
      res.render('books', {
        title: 'Books',
        books: body
      });
    } else {
      res.render('error', {
        message: err.message,
        error: err
      });
    }
  });
};



module.exports.detail = function (req, res) {
  var requestOptions, path;
  path = "/api/book/" + req.params.id;
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
  }
  request(requestOptions, function (err, response, body) {
    if (response.statusCode == 200) {
      res.render('detail', {
        title: body.title,
        book: body
      });
    } else {
      res.render('info', err);
    }
  });

};

module.exports.bookview = function (req, res) {
  res.render('book', {
    title: 'create'
  });
};
module.exports.about = function (req, res) {
  res.render('about', {
    title: 'About'
  });
};

module.exports.bookCreate = function (req, res) {
  var requestOptions, path, postdata;
  path = "/api/book";
  postdata = {
    title: req.body.title,
    info: req.body.info,
    ISBN: req.body.ISBN,
    brief: req.body.brief,
    tags: req.body.tags,
    img: req.body.img,
    rating: req.body.rating,
  };
  requestOptions = {
    url: apiOptions.server + path,
    method: "POST",
    json: postdata,
  };
  request(requestOptions, function (err, response, body) {
    console.log("body.name", body.name, response.statusCode);
    if (response.statusCode === 201) {
      res.redirect("/detail/" + body._id);
    } else if (response.statusCode == 400 && body.name && body.name == "ValidationError") {
      res.render('book', {
        title: '新增推荐图书',
        error: "val"
      });
    } else {
      console.log("body.name", body.name);
      info(res, response.statusCode);
    }
  });
};

var path = require('path');
var fs = require('fs');
var formidable = require('formidable')
module.exports.uploadImg = function (req, res) {
  var form = new formidable.IncomingForm(); //创建上传表单
  form.encoding = 'utf-8'; //设置编辑
  form.uploadDir = '/Users/liaojuncong/Projects/MEAN/public/upload/temp/'; //设置上传目录
  form.keepExtensions = true; //保留后缀
  form.maxFieldsSize = 3 * 1024 * 1024; //文件大小

  form.parse(req, function (err, fields, files) {
    console.log(files);
    if (err) {
      console.log(err);
      return res.json(0);
    }
    for (var key in files) {
      console.log(files[key].path);
      var extName = ''; //后缀名
      switch (key.type) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
        case 'image/x-png':
        default:
          extName = 'png';
          break;
      }
      var avatarName = (new Date()).getTime() + '.' + extName;
      var newPath = form.uploadDir + avatarName;

      fs.renameSync(files[key].path, newPath); //重命名
      return res.json("/upload/temp/" + avatarName);
    }
  });
}