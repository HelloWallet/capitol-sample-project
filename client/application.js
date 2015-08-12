"use strict";

/*jslint browser:true */
var Ember = require("capitol-dome").Ember;
var _ = require("capitol-types")._;
require("./initializers/");

var App = window.App = module.exports = require("capitol-dome").createApplication("App");

require("@templates");

App.Router.map(function() {
    this.route("dashboard");
    this.route("about");
});

App.advanceReadiness();