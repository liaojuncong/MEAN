var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};
//if (process.env.NODE_ENV === 'production') {
//    apiOptions.server = "https://stoneniqiu-mean.herokuapp.com/ ";
//}

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
      res.render('index', { title: 'Index', topics: body });
    } else {
      res.render('error', { message: err.message, error: err });
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
      res.render('books', { title: 'Books', books: body });
    } else {
      res.render('error', { message: err.message, error: err });
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
      res.render('detail', { title: body.title, book: body });
    } else {
      res.render('info', err);
    }
  });

};

module.exports.bookview = function (req, res) {
  res.render('book', { title: 'create' });
};
module.exports.about = function (req, res) {
  res.render('about', { title: 'About' });
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
        rating:req.body.rating,
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json: postdata,
    };
    request(requestOptions, function (err, response, body) {
        console.log("body.name", body.name, response.statusCode);
        if (response.statusCode === 201) {
            res.redirect("/detail/"+body._id);
        } 
        else if (response.statusCode == 400 && body.name && body.name == "ValidationError") {
            res.render('book', { title: '新增推荐图书', error:"val"});
        }
        else {
            console.log("body.name",body.name);
            info(res, response.statusCode);
        }
    });
};