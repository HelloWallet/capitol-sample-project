"use strict";

var capitol = require("capitol-core"),
    Controller = capitol.Controller,
    config = capitol.config;

var PagesController = new Controller({
    csrf: false,
    enableAuthFilter: false
});

var renderHostPage = [
    PagesController.getCSRFMiddleware(),
    function(req, res) {
        var params = {
            title: capitol.i18n.t("app.company") + " - " + capitol.i18n.t("app.title"),
            region: config.get("env"),
            _csrf: req.csrfToken(),
            clientLogLevel: config.get("logging:clientLogLevel"),
            useMin: config.get("server:useMinimizedCss"),
            initialApp: "application"
        };
        res.render("pages/main", params);
    }
];

var clientRoutes = [
    "/",
    "/dashboard",
    "/dashboard/*",
    "/about",
    "/about/*"
];

PagesController.setup();
PagesController.get(clientRoutes, renderHostPage);

module.exports = PagesController;
