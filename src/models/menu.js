import Pub from './pub';
import Soup from './soup';
import Meal from './meal';

export default class Menu {
	_pub: Pub;
	_soups: Array<Soup>;
	_meals: Array<Meal>;

	constructor() {
		this._soups = [];
		this._meals = [];
	}

	addMeal(meal) {
		this._meals.push(meal);
	}

	addSoup(soup) {
		this._soups.push(soup);
	}

	setPub(pub) {
		this._pub = pub;
	}

	format() {
		let outputLines = [];

		outputLines.push(this._pub._name);

		this._meals.forEach((meal, index) => {
			let outputLine = '> ' + (index+1) + '. ' + meal._name;

			if (meal._price)
				outputLine += ' [' + meal._price + ' Kč]';

			outputLines.push(outputLine);
		})

		this._soups.forEach((soup) => {
			outputLines.push('- ' + soup._name);
		})
		return outputLines.join("\n");
	}
}
