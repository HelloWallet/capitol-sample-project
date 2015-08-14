"use strict";

var capitol = require("capitol-core"),
    Controller = capitol.Controller,
    config = capitol.config;

var PagesController = new Controller({
    csrf: false
});
PagesController.setup();

PagesController.get("/", PagesController.getCSRFMiddleware());

PagesController.get("/", function(req, res) {
    var params = {
        title: "My New Capitol App",
        region: config.get("env"),
        _csrf: req.csrfToken(),
        clientLogLevel: config.get("logging:clientLogLevel"),
        useMin: config.get("server:useMinimizedCss"),
        initialApp: "application"
    };
    res.render("pages/main", params);
});

module.exports = PagesController;