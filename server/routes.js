"use strict";

// Draw routes.  Locomotive"s router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.

var capitol = require("capitol-core"),
    pressCorp = require("press-corp"),
    config = capitol.config,
    passport = capitol.authentication.passport,
    path = require("path");

module.exports = function routes() {
    var clientErrorLogger = capitol.logger.getNamedLogger("client");
    var isDev = config.get("env") === "development";
    var jsDir = path.join(__dirname, "../", config.get("app:staticFiles"), "js/");

    this.post("/error", pressCorp.error({
        srcUrl: jsDir,
        logger: clientErrorLogger,
        src: capitol.config.get("server:errorHandlerEnabled") ? [
            {
                src: (isDev ? "application.js" : "application.min.js"),
                map: (isDev ? "application.js.map" : "application.js.min.map")
            },
            {
                src: (isDev ? "libs.js" : "libs.min.js"),
                map: (isDev ? "libs.js.map" : "libs.js.min.map")
            }
        ] : [ ]
    }));

    this.post("/log", pressCorp.log({
        logger: clientErrorLogger
    }));

    console.log("ADDING ROUTE FOR PAGES MAIN");

    this.root("pages#main");

    /*
        Routing configured with capitol so we can
        support API docs.
     */
    var routing = capitol.RouteManager.register(this);
    routing.resources("apps");
};
