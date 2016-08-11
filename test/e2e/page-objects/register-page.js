'use strict';

var RegisterPage = function() {
  this.registerEmailEl = element(by.model('email'));
  this.registerBtnEl = element(by.buttonText('Register'));
  this.accountCreatedEl = element(by.css('[ng-show="accountCreated"]'));
  this.errorMsgEl = element(by.css('[ng-message="invalid"]'));

  this.navigate = function() {
    browser.get('/#/register');
  };

  this.register = function(email) {
    this.registerEmailEl.sendKeys(email);
    this.registerBtnEl.click();
  };

  this.getErrorText = function() {
    return this.errorMsgEl.getText();
  };

  this.getAccountCreatedText = function() {
    return this.accountCreatedEl.getText();
  };
};

module.exports = RegisterPage;
