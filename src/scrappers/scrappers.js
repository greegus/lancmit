import uEmila from './u-emila';

export default () => {
	return Promise
		.all([
			uEmila(),
			uEmila()
		])

		.catch((error) => {
			console.error(error);
		})
}