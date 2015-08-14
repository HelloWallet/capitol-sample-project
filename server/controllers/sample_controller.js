"use strict";

var capitol = require("capitol-core"),
    RESTController = capitol.RESTController,
    schemas = require("../../shared/schemas/sample_schema"),
    logger = capitol.logger.getLogger(__filename),
    config = capitol.config,
    _ = capitol._;

var SampleController = new RESTController({
	logger: logger,
	schema: true
});

SampleController.addValidationFilters();

SampleController.index = RESTController.annotatedFn({
	schema: schemas.resourceList
}, function(req, res) {
	res.json({
		samples: [
			{
				_id: 1,
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
	
	res.json({
		sample: _.merge({
			_id: id
		}, newNote)
	});
});

SampleController.update = RESTController.annotatedFn({
	schema: schemas.resource
}, function(req, res) {
	var id = req.params.id;
	var newNote = req.body.sample;

	newNote.message += " Saved!";

	res.json({
		sample: _.merge({
			_id: id
		}, newNote)
	});
});

module.exports = SampleController;

