var express = require('express');
var router = express.Router();
var Message = require('../models/message');

// isPalindrome to be moved somewhere else
var isPalindrome = function(content)  {
    content = content.trim().toLowerCase();
    return content == content.split('').reverse().join('');
}



/* Middleware, all requests will come through here first. */
router.use(function(req, res, next) {
    console.log("Received a " + req.method + " request.");
    next();
});

/* No params being passes, return message. */
router.get('/', function(req, res) {
  res.json({message: 'Connected to the API'});
});

/* Adds a new message to the database */
router.route('/messages').post(function(req, res)    {
        var message = new Message();
        message.title = req.body.title;
        message.content = req.body.content;
        message.isPalindrome = isPalindrome(req.body.content);

        message.save(function(err)  {
            if(err)
                res.send(err);
            else
                res.json({message: 'New message has been created.'});

        });
    });

/* Gets all the messages from the database */
router.route('/messages').get(function(req,res)  {
        Message.find(function(err, messages)    {
            if(err)
                res.send(err);
            else
                res.json(messages);
        })
    });

/* Gets a specific message */
router.route('/messages/:message_id').get(function(req, res) {
    Message.findById(req.params.message_id, function(err, message)  {
        if(err)
            res.send(err);
        else
            res.json(message);
    })
});

/* Delete the message with this id */
router.route('/messages/:message_id').delete(function(req, res) {
    Message.remove({ _id: req.params.message_id },
        function(err, message)  {
            if(err)
                res.send(err);
            else
                res.json({ message: "The message has been deleted."});
        }
    )
});

module.exports = router;
