require('chromedriver');
const chai = require('chai');
const expect = chai.expect;
const {Builder, By} = require('selenium-webdriver');

const data = {
    url: 'http://the-internet.herokuapp.com/dropdown',
    locators: {
        select:'#dropdown',
        firstDisabledOption: `#dropdown option:nth-child(1)`,
        secondEnabledOption: `#dropdown option:nth-child(2)`,
    }
}

describe('Стан активності елемента', () => {
    let driver;
    before(async () => driver = await new Builder().forBrowser('chrome').build());

    it(`Відкриваєм ${data.url}`, async () => {
        await driver.get(data.url);

        await expect(await driver.getTitle()).to.equal('The Internet');
    });

    it(`Перевіряємо, що 1й опшн неактивний`, async () => {
        const disabledAttr = await driver.findElement(By.css(data.locators.firstDisabledOption))
            .isEnabled();

        await expect(disabledAttr).eq(false);
    });

    it(`Перевіряємо, що 2й опшн є активний`, async () => {
        const enabledAttr = await driver.findElement(By.css(data.locators.secondEnabledOption))
            .isEnabled();

        await expect(enabledAttr).to.eq(true);
    });

    after(() => driver && driver.quit());
});
