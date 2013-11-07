define(function (require) {
	require("noamd/kendo/js/kendo.mobile.application.min");
	
	var AppController = kendo.Class.extend({
		
		init: function() {
			var that = this;
			
			//that.app = new kendo.mobile.Application(document.body);
			that.loadVibes();
		},
		
		loadVibes: function() {
			var that = this;
			
			require(["modules/vibes/vibes-controller"], function(vibesController) {
				vibesController.listNearbyVibes();
			});
			
		}
	});
	
	var appController = new AppController();
});