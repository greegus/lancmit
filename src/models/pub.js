import {trimString} from '../utils';

export default class Pub {
	_name: String;

	setName(name) {
		this._name = trimString(name);
	}
}