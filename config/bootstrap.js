/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
	//data
	var ingredients = [
											{name: 'redbull', price: 5.0, type: 'energy drink'},
											{name: 'kettle one', price: 5.0, type: 'liquor'},
	];

	var redbullVodka = {name: 'redbull vodka', price: 10.0, type: 'cocktail'};

	var mainOnMain = {name: 'main on main', email: 'main@main.com', password: 12345678,
										address: '12345 main st', city: 'los angeles', state: 'ca',
										zip: 90210, country: 'usa'};

	var customer = {name: 'kevin', birthdate: '06/22/1993', email: 'kevin@kevin.com', 
									password: 12345678, ccNumber: 1234, cvvNumber: 1234, 
									address: '19538 gifford st', city: 'reseda', state: 'ca', 
									zip: 91335, country: 'usa'};

	//create ingredients
	Ingredient.create(ingredients).exec(function createIngredient(err, ingredients) {
		for (var index = 0; index < ingredients.length; index++)
			console.log('created ingredient: ' + ingredients[index].name);
	});

	//create drinks
	Drink.create(redbullVodka).exec(function createRedbullVodka(err, redbullVodka) {
		var addToRedbullVodka = function (err, ingredient) {
			redbullVodka.ingredients.add(ingredient.id);
			redbullVodka.save();
		}

		Ingredient.findOne({name: 'redbull'}).exec(addToRedbullVodka);
		Ingredient.findOne({name: 'kettle one'}).exec(addToRedbullVodka);
	});

	//create bars
	Bar.create(mainOnMain).exec(function createMainOnMain(err, mainOnMain){
		var addToMainOnMain = function (err, drink) {
			mainOnMain.menu.add(drink.id);
			mainOnMain.save();
		}

		Drink.findOne({name: 'redbull vodka'}).exec(addToMainOnMain);
	});

	//create customers
	Customer.create(customer).exec(function createCustomer(err, customer){
		console.log('created customer: ' + customer.name);
	});

	cb();
};
