# A simple REST API for messages

The application is hosted on DigitalOcean using docker. The Dockerfile is included in this repository. The following
instructions make the following assumptions:
 - You are using Ubuntu
 - You have NPM and Docker installed


# Instructions on how to create docker image go here. 
1. SSH into the VPS or local Ubuntu machine. 
2. Clone this repository to the home directory.
3. Move into the newly created directory. 

To create a container from the image run the following command in terminal:
1. `$ docker build -t simple-restapi .`
2. `docker run -p 80:8080 -d simple-restapi` 

Docker maps port `8080` inside the container to port `80` of the machine. If you visit the IP address of the machine you
are using, you'll now be able to see the messages home page! 

# REST API Documentation

# Architecture 