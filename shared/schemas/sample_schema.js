var S = require("capitol-types").schema,
    ResourceSchemaSet = require("capitol-types").ResourceSchemaSet;

var sampleSchema = S.object({
    _id: S.number().integer().meta({primaryKey: true}),
    name: S.safeString(),
    message: S.safeString(),
    url: S.string().uri()
}).tags("sample");

module.exports = new ResourceSchemaSet({
    name: "Sample",
    model: sampleSchema,
    resource: S.object({
        sample: sampleSchema.required()
    }).tags("sampleResource"),
    resourceList: S.object({
        samples: S.array().items(sampleSchema).required()
    }).tags("sampleResourceList")
});