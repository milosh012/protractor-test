'use strict';

var _ = require('lodash');
var RegisterPage = require('./page-objects/register-page');

describe('Register page', function() {
  var registerPage = new RegisterPage();

  it('should see "user exist error" when creating a new user', function() {
    registerPage.navigate();
    registerPage.register('milos.janjic@sticky.ad');

    expect(registerPage.getErrorText()).toContain('address is already in use');
  });

  it('should be able to create a new user', function() {
    registerPage.navigate();
    registerPage.register('milos.janjic+e2e_tests' + _.random(100000, 99999999) + '@sticky.ad');

    expect(registerPage.getAccountCreatedText()).toContain('REGISTRATION EMAIL SENT');
  });

});
