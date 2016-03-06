var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    title: String,
    content: String,
    isPalindrome: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);
