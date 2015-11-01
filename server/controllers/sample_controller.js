"use strict";

var capitol = require("capitol-core"),
    RESTController = capitol.RESTController,
    schemas = require("../../shared/schemas/sample_schema"),
    logger = capitol.logger.getLogger(__filename),
    config = capitol.config,
    _ = capitol._;

var SampleController = new RESTController({
	logger: logger,
	schema: true,
    requireAuth: false
});

SampleController.index = RESTController.annotatedFn({
	schema: schemas.resourceList
}, function(req, res) {
	res.json({
		samples: [
			{
				id: 1,
				name: "Note 1",
				message: "Message of this note",
				url: "http://localhost:8282"
			}
		]
	});
});

SampleController.create = RESTController.annotatedFn({
	schema: schemas.resource
}, function(req, res) {
	var id = Math.floor(Math.random()*1000);
	var newNote = req.body.sample;

    var resp = {
        sample: _.merge({
            id: id
        }, newNote)
    };
    resp.sample.child = {
        dummy: "1",
        dummy2: "2"
    }

	res.json(resp);
});

SampleController.update = RESTController.annotatedFn({
	schema: schemas.resource
}, function(req, res) {
	var id = req.params.id;
	var newNote = req.body.sample;

	newNote.message += " Saved!";

    var resp = {
		sample: _.merge({
			id: id
		}, newNote)
	};
    resp.sample.child = {
        dummy: "1",
        dummy2: "2"
    }

	res.json(resp);
});

module.exports = SampleController;
