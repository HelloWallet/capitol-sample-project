"use strict";

var capitol = require("capitol-core"),
    RESTController = capitol.RESTController,
    logger = capitol.logger.getLogger(__filename),
    config = capitol.config;

var AppsController = new RESTController({
	logger: logger,
	schema: "App"
});

AppsController.index = function(req, res) {
	res.json({
		apps: [
			{
				name: "RE Local Dev",
				url: "http://localhost:8282"
			}
		]
	});
};

AppsController.show = function() {
	this.sendResources({
		apps: [
			{
				name: "RE Local Dev",
				url: "http://localhost:8282"
			}
		]
	});
};

module.exports = AppsController;

