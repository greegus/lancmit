import MenuItem from './menu-item';

export default class Meal extends MenuItem {
	_weight: Number;
	_alergens: String;
	_tags: Array<String>;

	constructor() {
		super();
		
		this._tags = [];
	}

	setWeight(weight) {
		this._weight = trim(weight || '');
	}
}