<h2>CRUD application using nestjs, mysql and typeOrm.</h2>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
   * [Prerequisites](#Prerequisites)
* [Running the app](#Running the app)
* [List of endpoints](#List of endpoints)
 

<!-- ABOUT THE PROJECT -->
## About The Project

CRUD application using nestjs, mysql and typeOrm.
There are three tables namely user, address and product are used in this application. 
Details about the user like name, email, address, products buied etc can be added, updated, fetched and deleted from the database.

<!-- Built With -->
### Built With

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. This application uses nestjs as its base.
Data and information has been stored using mySql and typeorm.
In this application, we have created a DatabaseModule based on the TypeORM package from scratch.

<!-- GETTING STARTED -->
## Getting Started

Setting up a new project is quite simple with the Nest CLI. With npm installed, you can create a new Nest project using the following commands
```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```
A project directory will be created, node modules and a few other boilerplate files will be installed.
A nest project has 3 basic core files i.e controller.ts, server.ts and module.js. 
CLI commands are provides to create these 3 files

```bash
# create a controller
$ nest g controller <name>
# create a server
$ nest g service <name>
# create a module
$ nest g module <name>
```
## Prerequisites

Please make sure that Node.js (>= 10.13.0) is installed on your operating system.


## Running the app
Application starts at <b>localhost:3000/</b>
```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

## List of endpoints
<p>Following are various endpoints available</p>
<ul>
<li>GET/users</li>
<li>POST/users (bulk or single)</li>
<li>GET/users/:id</li>
<li>PATCH/users/:id</li>
<li>DELETE/users/:id</li>
<li>GET/users/details/:id</li>
</ul><br>
<ul>
<li>GET/address/</li>
<li>GET/address/details/:id</li>
<li>POST/address</li>
</ul><br>
<ul>
<li>GET/product</li>
<li>GET/product/details/:id</li>
<li>POST/product</li>
</ul>