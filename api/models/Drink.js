/**
* Drink.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  	},
   	price: {
  		type: 'float',
  		required: true,
  	},
  	type: {
  		type: 'string',
  		enum: ['cocktail', 'beer', 'wine', 'shot', 'special', 'custom'],
  		required: true
  	},
  	description: {
  		type: 'text'
  	},
  	ingredients: {
  		collection: 'ingredient',
  	},
  	imagePath: {
  		type: 'string'
  	}
  }
};

