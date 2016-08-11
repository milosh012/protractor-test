'use strict';

var Utils = function() {
  this.logoutEl = element(by.id('logout'));
  this.avatarEl = element(by.css('.sticky-avatar'));

  this.logout = function() {
    this.avatarEl.click();
    this.logoutEl.click();
  };
};

module.exports = Utils;
