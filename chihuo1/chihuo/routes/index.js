var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../database/db').user;

console.log(10);
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'index' });
});

/*login*/
router.get('/login', function(req, res) {
    res.render('login', { title: 'login' });
});

/*ucenter*/
router.post('/ucenter', function(req, res) {
    console.log(0);
    var query_doc = {name: req.body.name, password: req.body.password};
    console.log(query_doc);
    (function(){
        console.log("hi")
        user.count(query_doc, function(err, doc){
            // if(doc == 1){
            //     console.log(query_doc.name + ": login success in " + new Date());
            //     res.render('ucenter', { user:doc });
            // }else{
            //     console.log(query_doc.name + ": login failed in " + new Date());
            //     res.redirect('/');
            // }
            console.log("hello")
        });
    })(query_doc);
});

module.exports = router;
