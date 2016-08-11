'use strict';

var LoginPage = function() {
  this.usernameEl = element(by.model('loginData.username'));
  this.passwordEl = element(by.model('loginData.password'));
  this.continueEl = element(by.id('continue'));
  this.errorMsgEl = element(by.css('[ng-message="invalid"]'));
  this.createAccountBtnEl = element(by.buttonText('Create account'));

  this.navigate = function() {
    browser.get('/#/login');
  };

  this.login = function(username, password) {
    this.usernameEl.sendKeys(username);
    this.passwordEl.sendKeys(password);

    this.continueEl.click();
  };

  this.getErrorText = function() {
    return this.errorMsgEl.getText();
  };
};

module.exports = LoginPage;
