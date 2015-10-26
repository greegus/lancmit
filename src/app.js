import scrappers from './scrappers/scrappers';
import slackbot from './slackbot';

import Menu from './models/menu';

function postMenuCardsToChannel(menuCards) {
	let outputLines = [];

	menuCards.forEach((menuCard) => {
		if (menuCard instanceof Menu)
			outputLines.push(menuCard.format()) ;
		else
			outputLines.push(menuCard);
	});
	
	let output = outputLines.join("\n\n");

	console.log(output);

	//slackbot.postMessageToChannel('lunch', output);
}

function scrapMenuCards() {
	return scrappers();
}

scrapMenuCards().then(postMenuCardsToChannel);