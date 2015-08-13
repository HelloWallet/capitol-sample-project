require("capitol-core").init({
    Types: require("capitol-types")
});

var capitol = require("capitol-core"),
    logger = capitol.logger.getLogger(__filename),
    express = capitol.express,
    config = capitol.config,
    sessionStore = require("./server/util/session").getSessionStore();

var app = new capitol.Application({
	sessionStore: sessionStore
});

require("./server/routes")(app.getRouter());

app.boot();

module.exports = app;