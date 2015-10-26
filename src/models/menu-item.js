import {trimString, sanitateNumericString, removeAlergensClosure, removeWeight} from '../utils';

export default class MenuItem {
	_name: String;
	_price: Number;

	setName(name) {
		this._name = trimString(removeWeight(removeAlergensClosure(name || ''))).replace(/^\d+[,.]\s*/, '');
	}

	setPrice(price) {
		this._price = sanitateNumericString(price || '');
	}
}