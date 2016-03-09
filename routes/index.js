var express = require('express');
var router = express.Router();
var Message = require('../models/message');

var isPalindrome = function(content)  {
    content = content.replace(/[^A-Z0-9]/ig, "").trim().toLowerCase();
    return content == content.split('').reverse().join('');
}

/* Middleware: all REST requests will come through here first. */
router.use(function(req, res, next) {
    console.log("Received a " + req.method + " request.");
    next();
});

/* No params being passed, return the message. */
router.get('/', function(req, res) {
  res.json({message: 'Connected to the API'});
});

/* Adds a new message to the database */
router.route('/messages')
    .post(function(req, res)    {
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
    })

/* Gets all the messages from the database */
    .get(function(req,res)  {
        Message.find(function(err, messages)    {
            if(err)
                res.send(err);
            else
                res.json(messages);
        });
    });


router.route('/messages/:message_id')
    /* Gets the message with that id */
    .get(function(req, res) {
        Message.findById(req.params.message_id, function(err, message)  {
            if(err)
                res.send(err);
            else
                res.json(message);
        })
    })

    /* Deletes the message with this id */
    .delete(function(req, res) {
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
