/**
* Ingredient.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	},
  	price: {
  		type: 'float',
  		required: true
  	},
  	description: {
  		type: 'text'
  	},
  	type: {
  		type: 'string',
  		enum: ['bar stock', 'soft drink', 'energy drink',
  				 'syrup', 'juice', 'liquor', 'other'],
  		required: true
  	}
  }
};

