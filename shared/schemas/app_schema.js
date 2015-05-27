var S = require("capitol-types").schema,
    ResourceSchemaSet = require("capitol-types").ResourceSchemaSet;

var appSchema = S.object({
    name: S.safeString(),
    url: S.string().uri()
}).tags("app");

module.exports = new ResourceSchemaSet({
    name: "App",
    model: appSchema,
    resource: S.object({
        app: appSchema.required()
    }).tags("appResource"),
    resourceList: S.object({
        apps: S.array().items(appSchema).required()
    }).tags("appResourceList")
});