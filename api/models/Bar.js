/**
* Bar.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
  	email: {
  		type: 'email',
  		required: true,
  		unique: true
  	},
  	description: {
  		type: 'text'
  	},
  	password: {
  		type: 'string',
  		  minLength: 8,
  		required: true,
  	},
  	address: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
  	city: {
  		type: 'string',
  		required: true,
  	},
		state: {
			type: 'string',
			required: true
		},
		zip: {
			type: 'int',
			required: true
		},
		country: {
			type: 'string',
			required: true
		},
		menu: {
			collection: 'drink',
		},
		line: {
			collection: 'customer',
		}
	}
};

