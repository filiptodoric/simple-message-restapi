var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = 'http://localhost:8080';
var messageId = null;
var date = new Date();
chai.use(chaiHttp);

describe('Messages', function() {
    it('GET all messages || should list all messages', function(done) {
        chai.request(server)
            .get('/api/messages')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                var numberOfMessages = res.body.length;
                for(var i = 0; i < numberOfMessages; i++)   {
                    res.body[i].should.have.property('_id');
                    res.body[i].should.have.property('title');
                    res.body[i].should.have.property('content');
                    res.body[i].should.have.property('isPalindrome');
                }
                messageId = res.body[numberOfMessages - 1]._id.toString();
                console.log(res.body[numberOfMessages - 1].title.toString());
                done()
            });
    });

    it('POST a message | should add a message to the database', function(done) {
        chai.request(server)
            .post('/api/messages')
            .send({'title': date.toString(), 'content': 'Created by the automated test'})
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('New message has been created.');
                done();
            });
    });

    it('GET a message by Id | should get the message with specified id', function(done) {
        chai.request(server)
            .get('/api/messages/' + messageId)
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                res.body.should.have.property('title');
                res.body.should.have.property('content');
                res.body.should.have.property('isPalindrome');
                res.body._id.should.equal(messageId);
                done();
            });
    });

    it('DELETE a message by Id | should delete the message with specified id', function(done) {
        chai.request(server)
            .delete('/api/messages/' + messageId)
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('The message has been deleted.');
                done();
            });
    });
});