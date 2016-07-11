var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
  app.use('/add', router);
  app.use('/remove', router);
};

router.get('/remove', function(req, res, next) {
  Article.remove({}, function(err) {
    if (err) console.log(err);
    res.redirect('/');
  });
});

router.get('/add', function(req, res, next) {
  var arts = ['Test 01', 'Test 02', 'Test 03'];
  for (var i=0;i<arts.length;i++) {
    var a = new Article();
    a.title = arts[i];
    a.save();
  }
  res.redirect('/');
});

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
