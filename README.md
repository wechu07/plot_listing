## Plot Listing

<a href="#">
<img src="https://imgur.com/dYZchcL.png" title="source: imgur.com" />
</a>

## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - "A Handlebars view engine for Express which doesn't suck."

## Features
* Users can create, edit, and remove Listings
* Users can review campgrounds once, and edit or remove their review
* Search listings that fall in 5 categories: Apartments, Cars, Food, Shopping and Travelling.
* Sort campgrounds by location, lowest price, or highest price.
## Running locally
1. Install [mongodb](https://www.mongodb.com/) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) free shared cluster
2. Install node, using the [Node Version Manager](https://github.com/nvm-sh/nvm "Official Node Version Manager Github page").
3. Clone from GitHub
```
git clone git@github.com:wechu07/Yelpcamp.git
cd YelpCamp
```

I am using SSH based authentication. The alternative for token-based authentication is:
```
https://github.com/wechu07/Yelpcamp.git
```
4. Install the dependencies using ```npm install```
5. Create a config/config.env file and configure your Mongo URI either from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) or local MongoDB
6. To run the app in development mode, use ```npm run dev```
7. Then go to [localhost:3000](http://localhost:3000/)
