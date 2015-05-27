"use strict";

var capitol = require("capitol-core"),
    Controller = capitol.Controller,
    config = capitol.config;

var PagesController = new Controller();

// PagesController.noCacheFilter();
// PagesController.environmentFilter();

PagesController.main = function() {
    this.title = "My New Capitol App";
    this.region = config.get("env");
    this.clientLogLevel = config.get("logging:clientLogLevel");
    this.useMin = config.get("server:useMinimizedCss");
    this.initialApp = "application";
    this.render();
};

module.exports = PagesController;