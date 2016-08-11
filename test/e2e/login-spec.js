'use strict';

var LoginPage = require('./page-objects/login-page');
var Utils = require('./page-objects/utils');

describe('Login page', function() {
  var loginPage = new LoginPage();
  var utils = new Utils();

  it('should be redirected to login page', function() {
    browser.get('/#');
    expect(browser.getLocationAbsUrl()).toBe('/login');
  });

  it('should see error message', function() {
    loginPage.navigate();
    loginPage.login('milos.janjic@sticky.ad', 'wrongpass');

    expect(loginPage.getErrorText()).toEqual('Username or password are invalid');
    expect(browser.getLocationAbsUrl()).toBe('/login');
  });

  it('should navigate to register page', function() {
    loginPage.navigate();
    loginPage.createAccountBtnEl.click();

    expect(browser.getLocationAbsUrl()).toBe('/register');
  });

  it('should login user', function() {
    loginPage.navigate();
    loginPage.login('milos.janjic@sticky.ad', 'asdfasdf');

    expect(browser.getLocationAbsUrl()).toBe('/experiments');
    utils.logout();
    expect(browser.getLocationAbsUrl()).toBe('/login');
  });

});
