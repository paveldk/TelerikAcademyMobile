define(function (require) {
	require("noamd/everlive/everlive.all");
	
	var AppServices = kendo.Class.extend({
		settings: {
			apiKey: "iDq9Qwh51MxcoqU9"
		},
		
		init: function() {
			var that = this;
			
			that.everlive = new Everlive(that.settings);
		}
	});
	
	var appServices = new AppServices();
	return appServices;
});