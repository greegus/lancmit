import dispatchScrapper from '../scrapper-factory';

import Pub from '../models/pub';
import Menu from '../models/menu';
import Soup from '../models/soup';
import Meal from '../models/meal';

export default () => {
    return dispatchScrapper('http://localhost/uemila.html').then(($) => {
    	let pub = new Pub();
        let menu = new Menu();

        // name
    	pub.setName($('h1.res-name').find('[itemprop="name"]').text()); 
        menu.setPub(pub);

        let menuItems = $('.tmi-daily').not('.hidden');

        // soup
        let soup = new Soup();
        soup.setName(menuItems.eq(0).find('.tmi-name').text());
        menu.addSoup(soup);

        // menu
        menuItems = menuItems.slice(1);

        menuItems.each((index, item) => {
            var meal = new Meal();

            meal.setName($(item).find('.tmi-name').text());
            meal.setPrice($(item).find('.tmi-price').text());

            menu.addMeal(meal);
        });

        return menu;
    });
}