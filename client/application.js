"use strict";

var Dome = require("capitol-dome");
var Ember = Dome.Ember;
var _ = require("capitol-types")._;
require("./initializers/").init();

var App = require("capitol-dome").createApplication("App");

require("@templates");
require("./initializers/").initApp(App);

App.Router.map(function() {
    this.route("dashboard");
    this.route("about");
});