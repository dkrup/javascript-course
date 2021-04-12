require('chromedriver');
const chai = require('chai');
const expect = chai.expect;
const {Builder, By} = require('selenium-webdriver');

const data = {
    url: 'http://the-internet.herokuapp.com/tables',
    locators: {
        dueBtnInSecondTable: '#table2 tr:nth-child(1) th:nth-child(4)',
        dueColumn: '#table2 tbody .dues',
    }
}

describe('Сортування таблиці', () => {
    let driver;
    before(async () => driver = await new Builder().forBrowser('chrome').build());

    it(`Відкриваємо ${data.url}`, async () => {
        await driver.get(data.url);

        await expect(await driver.getTitle()).to.equal('The Internet');
    });

    it(`Перевіряємо, що значення комірок колонки 'Due' сортуються в порядку зростання`, async () => {
        const elem = await driver.findElement(By.css(data.locators.dueBtnInSecondTable));
        const actions = await driver.actions({ async: true });
        await actions.move({ origin: elem }).perform();

        await elem.click();

        const dueColumnRows = await driver.findElements(By.css(data.locators.dueColumn));
        const dueColumnLength = dueColumnRows.length;

        // todo - move from here
        async function getDueColumnValues() {
            let i = 1;
            let values = [];

            for (i; i <= dueColumnLength; i++) {
                let value = await driver.findElement(By.css(`#table2 tbody tr:nth-child(${i}) .dues`)).getText();
                let valueWithoutSign = value.substring(1);
                values.push(valueWithoutSign);
            }
            return values;
        }

        function isSorted() {
            let sorted = true;
            const arr = getDueColumnValues();
            for (let i = 0; i <= arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    sorted = false;
                    break;
                }
            }
            return sorted;
        }

        await expect(isSorted()).to.equal(true);
    });
});
