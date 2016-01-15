Package.describe({
	name: "petsetgo:uploadcare",
	summary: "Wrapper around uploadcare for meteor. Inspired by filepicker-plus",
	version: "1.0.1",
	git: "https://github.com/petsetgo/meteor-uploadcare.git"
});

Package.onUse(function(api) {
	api.versionsFrom("1.0");

	// both
	api.add_files(["both/settings.js"], ["client", "server"]);

	// client
	api.use("templating", ["client"]);
	api.use("coffeescript");
	api.use("aldeed:autoform");
	api.use("aldeed:simple-schema");
	api.add_files([ "client/lib/loader.js" ], ["client"]);
	api.add_files([ "client/lib/utility.coffee" ], ["client"]);
	api.add_files([ "client/afUploadCare.coffee" ], ["client"]);
	api.add_files([ "client/afUploadCare.html" ], ["client"]);
	api.export("loadUploadcare", ["client"]);

	// server
	api.use("http", ["server"]);
	api.add_files(["server/methods.js"], ["server"]);
	api.export("UploadcareMethods", ["server"]);
});

Package.onTest(function(api) {
	api.use("petsetgo:uploadcare");
	api.use(["tinytest","coffeescript", "peterellisjones:describe"]);
	// api.addFiles("tests/stubs.js", ["client", "server"]);

	api.addFiles("tests/loader_tests.coffee", ["client"]);
	api.addFiles("tests/methods_tests.coffee", ["server"]);
});
