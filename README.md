# A simple REST API for messages

*Web App:* http://orangahang.com/

*API:* http://orangahang.com/api/

# Architecture 
**Back End:** Node.js with the Express.js framework

**Database:** MongoDB hosted w/ mLab and Mongoose as the ODM

   - Messages are stored in the database using the following Mongoose Schema:
   
        {
            title: String,
            content: String,
            isPalindrome: Boolean
        }

**Front End:** HTML/JavaScript/Bootstrap

# FYI
The application has been tested and deployed on a DigitalOcean VPS via docker. The Dockerfile is included in this repository. 

**Visit the current running version on http://www.orangahang.com/**

The following instructions require you to have:
 - NPM and Docker installed
 - Ubuntu (Other OSes will most likely work but I have not tried them myself).

# How to build and run locally
1. Clone this repository: `git clone https://github.com/filiptodoric/simple-message-restapi.git`
2. Move into the newly created directory and run: `npm install`
This will install all the dependencies from the `package.json` file.
3. When NPM is finished installing, start the server: `npm start`
4. `localhost:8080` on your web browser. Server is now running locally. 

# How to run tests

*(Mocha and Chai are included as dev dependicies in this package. 
This means everything should work fine, however, if you get an error you may need to install 
them globally with the `-g` flag.)* 

1. In terminal start the server. (`npm start` or `./bin/www`)
2. In another terminal window run the tests with `mocha`
3. Tada! The tests have ran. Results will be outputted to the terminal.


# How to create the Docker image and deploy to your server
1. SSH into your server. 
2. Clone this repository to the home directory: `git clone https://github.com/filiptodoric/simple-message-restapi.git`
3. Move into the newly created directory. 

To create a container from the image run the following command in terminal:

1. `docker build -t simple-restapi .`
2. `docker run -p 80:8080 -d simple-restapi` 

Docker maps port `8080` inside the container to port `80` of the machine. Visit the IP of your server and you will now have the API running. 

# REST API Documentation

**API requests are prefixed with `/api/`**

- For example: http://orangahang.com/api/messages

`GET /messages`
- *Use:* Get all the messages in the database. 
- *Returns:* a JSON array of all the messages in the database. 

`POST /messages`
- *Use:* Creates a new message and saves it to the database.
- *Request:* in the body include: `title: String` and `content: String`. 
- *Returns:* `{ message: 'New message has been created.'}`  At this point the message is evaluated on whether or not it is a palindrome. This is saved as a Boolean in the database.

`GET /messages/:message_id`
- *Use:* Gets a spsecefic message
- *Return:* message with the specified ID as a JSON. 

`DELETE /messages/:message_id` 
- *Use:* Deletes the message with the specified ID from the database.
- *Returns:* `{ message: 'The message has been deleted.'}`

# Sequence diagrams

[Diagrams can be found in their own file here](https://github.com/filiptodoric/simple-message-restapi/blob/master/DIAGRAMS.md)

