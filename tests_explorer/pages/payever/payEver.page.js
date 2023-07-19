// Harus selalu ada
const basePage = require(process.cwd() + '/tests_explorer/pages/basePage')
const { vehicle } = require('faker/lib/locales/ar');
const {webdriver, Builder, By, Key, until} = require('selenium-webdriver')

//faker
const faker = require('faker');
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const companyName = faker.company.companyName();
function generateSixDigitNumber() {
  return faker.random.number({ min: 100000, max: 999999 });
}
const sixDigitNumber = generateSixDigitNumber();


// Page Locators
const firstName_click = By.xpath('//span[@class="label-text ng-tns-c170-1 ng-trigger ng-trigger-isFocusedLabel ng-star-inserted"]')
const firstName_input = By.xpath('(//input[@type="text"])[1]')
const lastName_click = By.xpath('//span[@class="label-text ng-tns-c170-2 ng-trigger ng-trigger-isFocusedLabel ng-star-inserted"]')
const lastName_input = By.xpath('(//input[@type="text"])[2]')
const email_click = By.xpath('//span[@class="label-text ng-tns-c170-3 ng-trigger ng-trigger-isFocusedLabel ng-star-inserted"]')
const email_input = By.xpath('//input[@type="email"]')
const password_click = By.xpath('//span[@class="label-text ng-tns-c170-4 ng-trigger ng-trigger-isFocusedLabel ng-star-inserted"]')
const password_input = By.xpath('(//input[@type="password"])[1]')
const confirmPassword = By.xpath('//span[@class="label-text ng-tns-c170-5 ng-trigger ng-trigger-isFocusedLabel ng-star-inserted"]')
const conpass_input = By.xpath('(//input[@type="password"])[3]')
const nextBtn = By.xpath('//span[@translate=""][@pe-i18n-key="actions.sign_up"]')
const company_click = By.xpath('(//div[@class="label-container ng-tns-c170-8 form-label"])[1]')
const company_input = By.xpath('//input[@formcontrolname="name"]')
const company_santander_input = By.xpath('(//input[@type="text"])[1]')
const industry_click = By.xpath('//span[@class="label-text ng-tns-c170-11 ng-trigger ng-trigger-isFocusedLabel ng-star-inserted"]')
const industrySantander_sendKeys = By.xpath('//input[@class="mat-autocomplete-trigger ng-tns-c170-11"]')
const industry_option = By.xpath('//span[@class="autocomplete-option-item__label"]')
const phoneNumber_click = By.xpath('(//span[@tabindex="-1"])[3]')
const VAT_number_click = By.xpath('(//span[@tabindex="-1"])[4]')
const phoneNumber_input = By.xpath('//input[@type="tel"]')
const phoneNumber_santanderSendKeys = By.xpath('(//input[@type="text"])[2]')
const VAT_number = By.xpath('(//input[@type="text"])[3]')
const submitBtn = By.xpath('//button[@type="submit"]')
const getStartedBtn = By.xpath('//button[@class="welcome-screen-content-button"]')
const dashboardGreeting = By.xpath('//div[@class="demo-greeting dark"]')

//const validate TC 1
const Transactions1 = By.xpath('//h3[contains(text(), \'Transactions\')]')
const Checkout1 = By.xpath('//h3[contains(text(), \'Checkout\')]')
const Connect1 = By.xpath('//h3[contains(text(), \'Connect\')]')
const Products = By.xpath('//h3[contains(text(), \'Products\')]')
const Shop = By.xpath('//h3[contains(text(), \'Shop\')]')
const Message = By.xpath('//h3[contains(text(), \'Message\')]')
const Settings1 = By.xpath('//h3[contains(text(), \'Settings\')]')

//const validate TC 2
const Transactions2 = By.xpath('//h3[contains(text(), \'Transactions\')]') 
const Checkout2 = By.xpath ('//h3[contains(text(), \'Checkout\')]')
const Connect2 = By.xpath('//h3[contains(text(), \'Connect\')]')
const Point_of_Sale = By.xpath('//h3[contains(text(), \'Point\')]') 
const Settings2 = By.xpath('//h3[contains(text(), \'Settings\')]')

// Page Actions
class payEverPage extends basePage {

  async fillOutTheUserInformation(password) {
    await this.waitForDisplayed(firstName_click)
    await this.waitForDisplayed(lastName_click)
    await this.waitForDisplayed(email_click)
    await this.click(firstName_click)
    await this.sendKeys(firstName_input, firstName)
    await this.click(lastName_click)
    await this.sendKeys(lastName_input, lastName)
    await this.click(email_click)
    await this.sendKeys(email_input, email)
    await this.click(password_click)
    await this.sendKeys(password_input, password)
    await this.click(confirmPassword)
    await this.sendKeys(conpass_input, password)
  }

  async clickNext() {
    await this.waitForDisplayed(nextBtn)
    await this.click(nextBtn)
  }

  async fillOutTheBusinessInformation(){
    await this.waitForDisplayed(company_click)
    await this.click(company_click)
    await this.sendKeys(company_input, companyName)
    // await this.click(industry_sendKeys)
    // await this.sendKeys(industry_sendKeys, value)
    // await this.waitForDisplayed(industry_option)
    // await this.click(industry_option)
    await this.click(phoneNumber_click)
    await this.sendKeys(phoneNumber_input, sixDigitNumber)
  }

  async fillOutTheBusinessInformationSantander(value){
    await this.waitForDisplayed(company_click)
    await this.click(company_click)
    await this.sendKeys(company_santander_input, companyName)
    await this.click(industry_click)
    await this.sendKeys(industrySantander_sendKeys, value)
    await this.waitForDisplayed(industry_option)
    await this.click(industry_option)
    await this.click(phoneNumber_click)
    await this.sendKeys(phoneNumber_santanderSendKeys, sixDigitNumber)
    await this.click(VAT_number_click)
    await this.sendKeys(VAT_number, sixDigitNumber)
  }

  async register(){
    await this.waitForDisplayed(submitBtn)
    await this.click(submitBtn)
  }

  async getStartedField(){
    await this.waitForDisplayed(getStartedBtn)
    await this.click(getStartedBtn)
    await this.driver.sleep(1000)
    await this.waitForDisplayed(dashboardGreeting)
    await this.driver.findElement(dashboardGreeting)
  }

  async validateTC01(){
    await this.driver.findElement(Transactions1)
    await this.driver.findElement(Checkout1)
    await this.driver.findElement(Connect1)
    await this.driver.findElement(Products)
    await this.driver.findElement(Shop)
    // await this.driver.findElement(Message)
    await this.driver.findElement(Settings1)
  }

  async validateTC02(){
    await this.driver.findElement(Transactions2)
    await this.driver.findElement(Checkout2)
    await this.driver.findElement(Connect2)
    await this.driver.findElement(Point_of_Sale)
    await this.driver.findElement(Settings2)
  }
}

module.exports = payEverPage;