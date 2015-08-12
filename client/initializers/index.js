module.exports = {
	init: function() {
		require("./models");
		require("./components");
		require("./views");
		require("./routes");
		require("./controllers");
	},
	initApp: function(App) {
		App.register("transitions:main", require("../transitions"));
	}
};