define(function (require) {
	require("noamd/everlive/everlive.all");
	
	var AppServices = kendo.Class.extend({
		settings: {
			apiKey: "6NF0HIgRaSAoFCd2"
		},
		
		init: function() {
			var that = this;
			
			that.everlive = new Everlive(that.settings);
		}
	});
	
	var appServices = new AppServices();
	return appServices;
});