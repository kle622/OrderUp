/**
* Customer.js
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
  	birthdate: {
  		type: 'date',
  		required: true
  	},
  	email: {
  		type: 'email',
  		required: true,
  		unique: true
  	},
  	password: {
  		type: 'string',
  		minLength: 8,
  		required: true
  	},
  	ccNumber: {
  		type: 'int',
  		required: true
  	},
  	cvvNumber: {
  		type: 'int',
  		required: true
  	},
		address: {
			type: 'string',
			required: true
		},
		city: {
			type: 'string',
			required: true
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
		order: {
			collection: 'drink'
		},
		orderHistory: {
			type: 'json'
		},
	  beforeCreate: function (attrs, next) {
	    var bcrypt = require('bcrypt');

	    bcrypt.genSalt(10, function(err, salt) {
	      if (err) return next(err);

	      bcrypt.hash(attrs.password, salt, function(err, hash) {
	        if (err) return next(err);

	        attrs.password = hash;
	        next();
	      });
	    });
	  }
		/*
		toJSON: function() {
			var customer = this.toObject();
			for (attribute in customer)
				if (attribute != 'name' &&
						attribute != 'email' && 
						attribute != 'address' &&
						attribute != 'city' &&
						attribute != 'state' &&
						attribute != 'zip' &&
						attribute != 'ccNumber')
					delete customer[attribute];
			return customer;
		}
		*/
	}
};

