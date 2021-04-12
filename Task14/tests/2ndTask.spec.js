require('chromedriver');
const chai = require('chai');
const expect = chai.expect;
const {Builder, By} = require('selenium-webdriver');

const data = {
    url: 'http://the-internet.herokuapp.com/hovers',
    locators: {
        firstImage:'.example .figure:nth-of-type(1)',
        text: '.example .figure:nth-of-type(1) h5',
        finalText: 'name: user1',
    }
}

describe('Наведення мишою на елемент', () => {
    let driver;
    before(async () => driver = await new Builder().forBrowser('chrome').build());

    it(`Відкриваємо ${data.url}`, async () => {
        await driver.get(data.url);

        await expect(await driver.getTitle()).to.equal('The Internet');
    });

    it(`Наводимо курсор і перевіряємо текст`, async () => {
        try {
            const elem = driver.findElement(By.css(data.locators.firstImage));
            const actions = driver.actions({ async: true });
            await actions.move({ origin: elem }).perform();

            await expect(await driver.findElement(By.css(data.locators.text)).getText())
                .to.equal(data.locators.finalText);
        }
        finally {
            await driver.quit();
        }
    });
});
