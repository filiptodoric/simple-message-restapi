# A simple REST API for messages

# Architecture 
**Back End:** Node.js with the Express.js framework

**Database:** MongoDB hosted w/ mLab and Mongoose as the ODM

**Front End:** HTML/JavaScript/Bootstrap

The application is hosted on DigitalOcean using docker. The Dockerfile is included in this repository. **The following
instructions require you to have:**
 - NPM and Docker installed
 - Ubuntu (Other OSes will most likely work but I have not tried them myself).

# How to build and run locally
1. Clone this repository: `git clone https://github.com/filiptodoric/simple-message-restapi.git`
2. Move into the newly created directory and run: `npm install`
This will install all the dependencies from the `package.json` file.
3. When NPM is finished installing, start the server: `npm start`
4. `localhost:8080` on your web browser. Server is now running locally. 


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

`GET /messages`: Returns a JSON array of all the messages in the database. 

`POST /messages`: In the body of the request include: `title: String` and `content: String`. This returns: `{ message: 'New message has been created.'}` This creates a new message and saves it to the database. At this point the message is evaluated on whether or not it is a palindrome. This is saved as a Boolean in the database.

`GET /messages/:message_id`: Returns the message with the specified ID as a JSON. 

`DELETE /messages/:message_id`: Deletes the message with the specified ID from the database.

