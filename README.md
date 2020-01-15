# MATIC-BlockchainAssignment1

## Installation steps:

~$ git clone https://github.com/amitroy-git/MATIC-BlockchainAssignment1.git
~$ cd MATIC-BlockchainAssignment1
~$ npm install

configure ./param/config.js file.
Make sure the mongodb must be running at the url and accessible. Or Install [mongodb community edition](https://docs.mongodb.com/manual/administration/install-community/) and run it locally. 

~$ npm data-load
~$ npm start

server will be running at port 8080.

http://localhost:8080/getTransasctions?addr api can be called using browser/postman. The query address must be passed with the GET request.
For example:  http://localhost:8080/getTransasctions?addr=0xe3DB53e3ecC89580A3fBEb263BC8fC39EBB1bcC9
