# A simple REST API for messages

# Architecture 
**Back End:** Node.js with the Express.js framework

**Front End:** 

The application is hosted on DigitalOcean using docker. The Dockerfile is included in this repository. The following
instructions require you to have:
 - NPM and Docker installed
 - Ubuntu (Other OSes will most likely work but I have not tried them myself).

# How to build and run locally
1. Clone this repository: `git clone https://github.com/filiptodoric/simple-message-restapi.git`
2. Move into the newly created directory and run: `npm install`
This will install all the dependancies from the `package.json` file.
3. When NPM is finshed installing, start the server: `npm start`
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

