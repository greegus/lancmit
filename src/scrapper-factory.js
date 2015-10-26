import request from 'request';
import cheerio from 'cheerio';

export default (url) => {
	return new Promise((resolve, reject) => {
		request(url, (error, response, html) => {
			if (error)
				reject(error);
			else
				resolve(cheerio.load(html));
		})
	});
}