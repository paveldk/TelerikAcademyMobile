define(function (require) {
	require("noamd/kendo/js/kendo.mobile.application.min");
	
	var AppController = kendo.Class.extend({
		
		init: function() {
			var that = this;
			
			that.app = new kendo.mobile.Application(document.body);
		},
	});
	
	var appController = new AppController();
});