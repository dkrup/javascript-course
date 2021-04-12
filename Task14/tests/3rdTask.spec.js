require('chromedriver');
const chai = require('chai');
const expect = chai.expect;
const {Builder, By, until} = require('selenium-webdriver');

const data = {
    url: 'http://formy-project.herokuapp.com/form',
    firstName: 'Peter',
    lastName: 'Peterson',
    job: 'tester',
    education: 'High School',
    sex: 'Male',
    yearsOfExperience: '2-4',
    date: '12/12/2020',
    finalText: 'The form was successfully submitted!',
    locators: {
        firstName: '#first-name',
        lastName: '#last-name',
        job: '#job-title',
        radioBtn: '#radio-button-1',
        checkBox: '#checkbox-1',
        secondOption: '#select-menu > option:nth-child(3)',
        datepicker: '#datepicker',
        submitBtn: 'a.btn',
    }
}

describe('Заповнення форми', () => {
    let driver;
    before(async () => driver = await new Builder().forBrowser('chrome').build());

    it(`Відкриваємо ${data.url}`, async () => {
        await driver.get(data.url);

        await expect(await driver.getTitle()).to.equal('Formy');
    });

    it(`Заповнюємо поля форми`, async () => {
        await driver.findElement(By.css(data.locators.firstName)).sendKeys(data.firstName);
        await driver.findElement(By.css(data.locators.lastName)).sendKeys(data.lastName);
        await driver.findElement(By.css(data.locators.job)).sendKeys(data.job);
        await driver.findElement(By.css(data.locators.radioBtn)).click();
        await driver.findElement(By.css(data.locators.checkBox)).click();
        await driver.findElement(By.css(data.locators.secondOption)).click();
        await driver.findElement(By.css(data.locators.datepicker)).sendKeys(data.date);
        await driver.findElement(By.css(data.locators.submitBtn)).click();
        await driver.wait(until.urlIs('http://formy-project.herokuapp.com/thanks'));
        await driver.wait(until.elementLocated(By.css('.alert-success')), 3000);

        await expect(await driver.findElement(By.css('.alert-success')).getText())
            .to.equal(data.finalText);
    });
});
