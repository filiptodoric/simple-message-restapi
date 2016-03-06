var express = require('express');
var router = express.Router();
var Message = require('../models/message');

// isPalindrome to be moved somewhere else
var isPalindrome = function(content)  {
    return content == content.trim().split('').reverse().join('');
}



/* Middleware, all requests will come through here first. */
router.use(function(req, res, next) {
    console.log("Request received.");
    next();
});

/* No params being passes, return message. */
router.get('/', function(req, res) {
  res.json({message: 'Connected to the API'});
});

router.route('/messages')
    .post(function(req, res)    {
        var message = new Message();
        message.title = req.body.title;
        message.content = req.body.content;
        message.isPalindrome = isPalindrome(req.body.content);

        message.save(function(err)  {
            if(err) {
                res.send(err);
            }
            else    {
                res.json({message: 'New message has been created.'});
            }
        })

    });

module.exports = router;
