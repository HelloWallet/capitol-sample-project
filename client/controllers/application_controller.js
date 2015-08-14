"use strict";

var Ember = require("capitol-dome").Ember;

module.exports = Ember.Controller.extend({
    isDashboardActive: function() {
        return this.get("currentPath").startsWith("dashboard");
    }.property("currentPath"),

    isAboutActive: function() {
        return this.get("currentPath").startsWith("about");
    }.property("currentPath")
});